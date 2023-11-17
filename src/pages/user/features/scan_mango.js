import React, { useEffect, useRef, useState } from "react";
import cv from "@techstark/opencv-js";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgpu";

import "../../../styles/scan_mango.css";
import { detectVideo } from "../../../utils/detect_per";

export default function ScanMango() {
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  });

  const modelName = "yolov8n";
  const cameraRef = useRef(null);
  const cvRef = useRef(null);
  const canvasRef = useRef(null);
  const selectCamera = useRef(null);

  const [intervalId, setIntervalId] = useState(null);
  const [streaming, setStreaming] = useState(null);
  const [cameras, setCameras] = useState([]);
  const [selectedCamera, setSelectedCamera] = useState(null);

  useEffect(() => {
    tf.ready().then(async () => {
      const yolov8 = await tf.loadGraphModel(
        `${window.location.origin}/${modelName}_web_model/model.json`
      );

      const dummyInput = tf.ones(yolov8.inputs[0].shape);
      const warmupResults = yolov8.execute(dummyInput);

      setModel({
        net: yolov8,
        inputShape: yolov8.inputs[0].shape,
      });

      tf.dispose([warmupResults, dummyInput]);
    });

    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        const videoDevices = devices.filter(
          (device) => device.kind === "videoinput"
        );
        setCameras(videoDevices);
        setSelectedCamera(videoDevices[0]?.deviceId);
      });
    }
  }, []);

  const cameraStart = () => {
    const id = setInterval(() => {
      const context = cvRef.current.getContext("2d");
      context.drawImage(cameraRef.current, 0, 0, 640, 480);
      let src = cv.imread(cvRef.current);
      let dst = new cv.Mat();
      cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
      cv.GaussianBlur(src, dst, new cv.Size(5, 5), 0, 0, cv.BORDER_DEFAULT);
      cv.flip(dst, dst, 1); // Add this line to flip the image horizontally
      cv.imshow(cvRef.current, dst);
      src.delete();
      dst.delete();
    }, 100); // Execute every 100ms

    setIntervalId(id);
  };

  const cameraStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="mt-3">📷 YOLOv8 Live Detection App</h1>
        <p className="mt-2">
          YOLOv8 live detection application on browser powered by{" "}
          <code>tensorflow.js</code>
        </p>
        <p>
          Serving : <code className="code">{modelName}</code>
        </p>
      </div>

      <div className="relative">
        <video
          autoPlay
          muted
          ref={cameraRef}
          onPlay={() =>
            detectVideo(cameraRef.current, model, canvasRef.current)
          }
        />
        <canvas
          className="absolute top-0 left-0 w-full h-full"
          ref={cvRef}
          hidden
        />
        <canvas
          className="absolute top-0 left-0 w-full h-full"
          width={model.inputShape[1]}
          height={model.inputShape[2]}
          ref={canvasRef}
        />
      </div>

      <div>
        <button
          onClick={() => {
            if (streaming === null) {
              selectCamera.current.disabled = true;

              if (
                navigator.mediaDevices &&
                navigator.mediaDevices.getUserMedia
              ) {
                navigator.mediaDevices
                  .getUserMedia({
                    audio: false,
                    video: {
                      facingMode: "environment",
                      deviceId: selectedCamera,
                    },
                  })
                  .then((stream) => {
                    cameraRef.current.srcObject = stream;
                  });
              } else alert("Can't open Webcam!");

              cameraRef.current.style.display = "block";
              cameraStart();
              setStreaming("camera");
            } else {
              selectCamera.current.disabled = false;

              if (cameraRef.current.srcObject) {
                cameraRef.current.srcObject.getTracks().forEach((track) => {
                  track.stop();
                });
                cameraRef.current.srcObject = null;
              } else alert("Please open Webcam first!");

              cameraRef.current.style.display = "none";
              cameraStop();
              setStreaming(null);
            }
          }}
        >
          {streaming === "camera" ? "Close" : "Open"} Webcam
        </button>
      </div>

      <div>
        <select
          ref={selectCamera}
          value={selectedCamera}
          onChange={(e) => setSelectedCamera(e.target.value)}
        >
          {cameras.map((camera, index) => (
            <option key={index} value={camera.deviceId}>
              {camera.label || `Camera ${index + 1}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
