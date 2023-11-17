import * as tf from "@tensorflow/tfjs";
import objectTracker from '@cloud-annotations/object-tracking';

import { renderBoxes } from "./renderBox";
// import labels from "./labels_smartmango.json";
import labels from "./labels.json";

const numClass = labels.length;
let scoresList = [];

/**
 * Preprocess image / frame before forwarded into the model
 * @param {HTMLVideoElement|HTMLImageElement} source
 * @param {Number} modelWidth
 * @param {Number} modelHeight
 * @returns input tensor, xRatio and yRatio
 */
const preprocess = (source, modelWidth, modelHeight) => {
  let xRatio, yRatio; // ratios for boxes

  const input = tf.tidy(() => {
    const img = tf.browser.fromPixels(source);

    // padding image to square => [n, m] to [n, n], n > m
    const [h, w] = img.shape.slice(0, 2); // get source width and height
    const maxSize = Math.max(w, h); // get max size
    const imgPadded = img.pad([
      [0, maxSize - h], // padding y [bottom only]
      [0, maxSize - w], // padding x [right only]
      [0, 0],
    ]);

    xRatio = maxSize / w; // update xRatio
    yRatio = maxSize / h; // update yRatio

    return tf.image
      .resizeBilinear(imgPadded, [modelWidth, modelHeight]) // resize frame
      .div(255.0) // normalize
      .expandDims(0); // add batch
  });

  return [input, xRatio, yRatio];
};

/**
 * Function run inference and do detection from source.
 * @param {HTMLImageElement|HTMLVideoElement} source
 * @param {tf.GraphModel} model loaded YOLOv8 tensorflow.js model
 * @param {HTMLCanvasElement} canvasRef canvas reference
 * @param {VoidFunction} callback function to run after detection process
 */
export const detect = async (source, model, canvasRef, callback = () => {}) => {
  const [modelWidth, modelHeight] = model.inputShape.slice(1, 3); // get model width and height

  tf.engine().startScope(); // start scoping tf engine
  const [input, xRatio, yRatio] = preprocess(source, modelWidth, modelHeight); // preprocess image

  const res = model.net.execute(input); // inference model
  const transRes = res.transpose([0, 2, 1]); // transpose result [b, det, n] => [b, n, det]
  const boxes = tf.tidy(() => {
    const w = transRes.slice([0, 0, 2], [-1, -1, 1]); // get width
    const h = transRes.slice([0, 0, 3], [-1, -1, 1]); // get height
    const x1 = tf.sub(transRes.slice([0, 0, 0], [-1, -1, 1]), tf.div(w, 2)); // x1
    const y1 = tf.sub(transRes.slice([0, 0, 1], [-1, -1, 1]), tf.div(h, 2)); // y1
    return tf
      .concat(
        [
          y1,
          x1,
          tf.add(y1, h), //y2
          tf.add(x1, w), //x2
        ],
        2
      )
      .squeeze();
  }); // process boxes [y1, x1, y2, x2]

  const [scores, classes] = tf.tidy(() => {
    // class scores
    const rawScores = transRes.slice([0, 0, 4], [-1, -1, numClass]).squeeze(0); // #6 only squeeze axis 0 to handle only 1 class models
    return [rawScores.max(1), rawScores.argMax(1)];
  }); // get max scores and classes index

  const nms = await tf.image.nonMaxSuppressionAsync(
    boxes,
    scores,
    3,
    0.45,
    0.2
  ); // NMS to filter boxes

  const boxes_data = boxes.gather(nms, 0).dataSync(); // indexing boxes by nms index
  const scores_data = scores.gather(nms, 0).dataSync(); // indexing scores by nms index
  const classes_data = classes.gather(nms, 0).dataSync(); // indexing classes by nms index

  // Get average per # scans
  scoresList.push(scores_data[0]);

  if (scoresList.length === 5) {
    const sum = scoresList.reduce((total, score) => total + score, 0);
    const average = [sum / scoresList.length];

    renderBoxes(canvasRef, boxes_data, average, classes_data, [xRatio, yRatio]); // render boxes
    tf.dispose([res, transRes, boxes, average, classes, nms]); // clear memory
    scoresList = [];
  }

  // renderBoxes(canvasRef, boxes_data, scores_data, classes_data, [
  //   xRatio,
  //   yRatio,
  // ]); // render boxes

  tf.dispose([res, transRes, boxes, scores, classes, nms]); // clear memory
  callback();
  tf.engine().endScope(); // end of scoping
};

/**
 * Function to detect video from every source.
 * @param {HTMLVideoElement} vidSource video source
 * @param {tf.GraphModel} model loaded YOLOv8 tensorflow.js model
 * @param {HTMLCanvasElement} canvasRef canvas reference
 */
export const detectVideo = (vidSource, model, canvasRef) => {
  /**
   * Function to detect every frame from video
   */
  const detectFrame = async () => {
    if (vidSource.videoWidth === 0 && vidSource.srcObject === null) {
      const ctx = canvasRef.getContext("2d");
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clean canvas
      return; // handle if source is closed
    }

    detect(vidSource, model, canvasRef, () => {
      requestAnimationFrame(detectFrame); // get another frame
    });
  };

  detectFrame(); // initialize to detect every frame
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Tracker Section ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //
let nextID = 1
const trackers = {}

/**
 * Function to add tracker to a detected object.
 * @param {HTMLVideoElement} source video source
 * @param {Array} box boxes array
 */
function addTracker(source, box) {
  const id = nextID++
  trackers[id] = objectTracker.init(source, box)
  return id
}

/**
 * Function to updated tracker of the detected object.
 * @param {Counter} id tracked object
 * @param {HTMLVideoElement} source video source
 */
function updateTracker(id, source) {
  const tracker = trackers[id]
  if (tracker) {
    if (hasLeftFrame(tracker.next(source), source)) {
      removeTracker(id);
    } else {
      return tracker.next(source)
    }
  } else {
    throw new Error(`No tracker with ID ${id}`)
  }
}

/**
 * Function to delete tracker of the detected object.
 * @param {Counter} id tracked object
 */
function removeTracker(id) {
  delete trackers[id]
}

/**
 * Function to check if object has left the frame.
 * @param {Array} box boxes array
 * @param {HTMLVideoElement} source video source
 */
function hasLeftFrame(box, source) {
  const [x, y, width, height] = box;
  return (
    x < 0 ||
    y < 0 ||
    x + width > source.width ||
    y + height > source.height
  );
}