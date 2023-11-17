import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import Control from "../assets/icons/control.svg";
import Sort from "../assets/icons/sort.svg";
import Check from "../assets/icons/check.svg";
import Vision from "../assets/about_vision.svg";
import Sorting from "../assets/about_sorting.svg";
import Advantage from "../assets/about_advantage.svg";
import Collaborate from "../assets/about_collaborate.svg";
import Revolution from "../assets/about_revolution.svg";

export default function About() {
  return (
    <div className="min-h-screen bg-[#e5e6e4]">
      <div className="flex flex-col px-6 sm:px-10 pb-16">
        <div className="w-full lg:h-1/6 pt-24">
          <p className="text-sm md:text-base mb-3">
            WELCOME TO SMARTMANGO - WHERE THE FUTURE OF CARABAO MANGO FARMING IS
            RIPE WITH POSSIBILITIES!
          </p>
          <p className="text-5xl md:text-7xl font-semibold">About SmartMango</p>
        </div>
      </div>

      {/* >= XL */}
      <div className="h-full hidden xl:flex flex-wrap mb-16">
        {/* TOP */}
        <div className="w-full flex flex-wrap">
          <div className="w-10"></div>
          <div className="w-1/12 h-full flex flex-col items-center">
            <div className="aspect-square h-6 rounded-full bg-gray-800"></div>
            <div className="w-2 h-full bg-gray-800"></div>
          </div>
          <div className="w-3/12 pb-6">
            <p className="text-5xl font-semibold mb-4">VISION</p>
            <div className="flex flex-row space-x-4">
              <div className="flex-shrink flex flex-col space-y-6">
                <object data={Control} className="w-10">
                  "Control" Image
                </object>
                <object data={Sort} className="w-10">
                  "Sort" Image
                </object>
                <object data={Check} className="w-10">
                  "Check" Image
                </object>
              </div>
              <div className="flex-grow flex flex-col justify-center space-y-4">
                <p className="text-lg">
                  enhance the Carabao mango industry through smart, sustainable,
                  and innovative solutions
                </p>
                <p className="text-lg where every Carabao mango harvested, sorted, and delivered is of the highest quality">
                  where every Carabao mango harvested, sorted, and delivered is
                  of the highest quality
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/12 h-full flex flex-col items-center">
            <div className="aspect-square h-6 rounded-full bg-gray-800"></div>
            <div className="w-2 h-full bg-gray-800"></div>
          </div>
          <div className="w-3/12 pb-6">
            <p className="text-5xl font-semibold mb-4">
              The SmartMango Advantage
            </p>
            <p className="text-lg">
              Our cutting-edge solutions harness the power of artificial
              intelligence and machine learning to sort mangoes with unmatched
              precision.
            </p>
          </div>

          <div className="w-1/12 h-full flex flex-col items-center">
            <div className="aspect-square h-6 rounded-full bg-gray-800"></div>
            <div className="w-2 h-full bg-gray-800"></div>
          </div>
          <div className="w-[20%] pb-6">
            <p className="text-5xl font-semibold mb-4">
              Join the SmartMango Revolution
            </p>
            <p className="text-lg mb-2">
              Together, let's shape an industry where every mango tells a story
              of:
            </p>
            <div className="grid grid-cols-2 justify-center items-center gap-2 pl-4">
              <p className="text-lg italic">Innovation</p>
              <p className="w-full rounded-full pr-2 text-right text-sm center bg-lime-800 text-white">
                100%
              </p>
              <p className="text-lg italic">Quality</p>
              <p className="w-full rounded-full pr-2 text-right text-sm center bg-lime-800 text-white">
                100%
              </p>
              <p className="text-lg italic">Shared success</p>
              <p className="w-full rounded-full pr-2 text-right text-sm bg-lime-800 text-white">
                100%
              </p>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="w-full flex flex-wrap items-center">
          <div className="w-10 h-2 bg-gray-800"></div>
          <div className="relative aspect-square w-1/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="h-full rounded-bl-full bg-gray-800"></div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Vision})`,
                }}
              ></div>
            </div>
          </div>

          <div className="w-1/12 h-2 bg-gray-800"></div>
          <div className="relative aspect-square w-1/12">
            <div className="h-full grid grid-cols-2">
              <div className="h-full rounded-tl-full bg-gray-800"></div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Sorting})`,
                }}
              ></div>
            </div>
          </div>

          <div className="w-1/12 h-2 bg-gray-800"></div>
          <div className="relative aspect-square w-1/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="h-full rounded-bl-full bg-gray-800"></div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Advantage})`,
                }}
              ></div>
            </div>
          </div>

          <div className="w-1/12 h-2 bg-gray-800"></div>
          <div className="relative aspect-square w-1/12">
            <div className="h-full grid grid-cols-2">
              <div className="h-full rounded-tl-full bg-gray-800"></div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Collaborate})`,
                }}
              ></div>
            </div>
          </div>

          <div className="w-1/12 h-2 bg-gray-800"></div>
          <div className="relative aspect-square w-1/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="h-full rounded-bl-full bg-gray-800"></div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Revolution})`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="w-full flex flex-wrap">
          <div className="w-10"></div>
          <div className="w-2/12"></div>
          <div className="w-1/12 h-full flex flex-col items-center">
            <div className="w-2 h-full bg-gray-800"></div>
            <div className="aspect-square h-6 rounded-full bg-gray-800"></div>
          </div>
          <div className="w-3/12 pt-6">
            <p className="text-5xl font-semibold mb-4">
              SmartMango employs AI-driven sorting.
            </p>
          </div>

          <div className="w-1/12 h-full flex flex-col items-center">
            <div className="w-2 h-full bg-gray-800"></div>
            <div className="aspect-square h-6 rounded-full bg-gray-800"></div>
          </div>
          <div className="w-3/12 pt-6">
            <p className="text-lg mb-4">
              We{" "}
              <span className="text-5xl font-semibold px-2">collaborate</span>{" "}
              with farmers, distributors, retailers, and mango enthusiasts,
              fostering a network that supports mutual growth.
            </p>
          </div>
        </div>
      </div>

      {/* < XL */}
      <div className="w-full h-full xl:hidden flex flex-wrap mb-16">
        {/* VISION */}
        <div className="w-full flex flex-wrap items-center">
          <div className="w-1/12 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          <div className="relative aspect-square w-3/12">
            <div className="h-full grid grid-cols-2">
              <div className="h-full rounded-tl-full bg-gray-800"></div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 lg:h-2 bg-gray-800"></div>
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Vision})`,
                }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          <div className="relative aspect-square h-4 sm:h-8 md:h-12 lg:h-16 rounded-full bg-gray-800">
            <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/12"></div>
          <div className="w-3/12 h-FULL flex flex-col items-center">
            <div className="w-2 md:w-3 lg:w-4 h-full bg-gray-800"></div>
          </div>
          <div className="w-6/12 pt-4 pb-14">
            <p className="text-5xl md:text-7xl font-semibold mb-4">VISION</p>
            <div className="flex flex-row space-x-4">
              <div className="flex-shrink flex flex-col space-y-6">
                <object data={Control} className="w-10">
                  "Control" Image
                </object>
                <object data={Sort} className="w-10">
                  "Sort" Image
                </object>
                <object data={Check} className="w-10">
                  "Check" Image
                </object>
              </div>
              <div className="flex-grow flex flex-col justify-center space-y-4">
                <p className="text-xl md:text-2xl">
                  enhance the Carabao mango industry through smart, sustainable,
                  and innovative solutions
                </p>
                <p className="text-xl md:text-2xl where every Carabao mango harvested, sorted, and delivered is of the highest quality">
                  where every Carabao mango harvested, sorted, and delivered is
                  of the highest quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SORTING */}
        <div className="w-full flex flex-wrap items-center">
          <div className="w-1/12"></div>
          <div className="relative aspect-square w-3/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Sorting})`,
                }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          <div className="relative aspect-square h-4 sm:h-8 md:h-12 lg:h-16 rounded-full bg-gray-800">
            <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/12"></div>
          <div className="w-3/12 h-FULL flex flex-col items-center">
            <div className="w-2 md:w-3 lg:w-4 h-full bg-gray-800"></div>
          </div>
          <div className="w-6/12 pt-4 pb-14">
            <p className="text-5xl md:text-7xl font-semibold mb-4">
              SmartMango employs AI-driven sorting.
            </p>
          </div>
        </div>

        {/* ADVANTAGE */}
        <div className="w-full flex flex-wrap items-center">
          <div className="w-1/12"></div>
          <div className="relative aspect-square w-3/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Advantage})`,
                }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          <div className="relative aspect-square h-4 sm:h-8 md:h-12 lg:h-16 rounded-full bg-gray-800">
            <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/12"></div>
          <div className="w-3/12 h-FULL flex flex-col items-center">
            <div className="w-2 md:w-3 lg:w-4 h-full bg-gray-800"></div>
          </div>
          <div className="w-6/12 pt-4 pb-14">
            <p className="text-5xl md:text-7xl font-semibold mb-4">
              The SmartMango Advantage
            </p>
            <p className="text-xl md:text-2xl">
              Our cutting-edge solutions harness the power of artificial
              intelligence and machine learning to sort mangoes with unmatched
              precision.
            </p>
          </div>
        </div>

        {/* COLLABORATE */}
        <div className="w-full flex flex-wrap items-center">
          <div className="w-1/12"></div>
          <div className="relative aspect-square w-3/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Collaborate})`,
                }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          <div className="relative aspect-square h-4 sm:h-8 md:h-12 lg:h-16 rounded-full bg-gray-800">
            <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/12"></div>
          <div className="w-3/12 h-FULL flex flex-col items-center">
            <div className="w-2 md:w-3 lg:w-4 h-full bg-gray-800"></div>
          </div>
          <div className="w-6/12 pt-4 pb-14">
            <p className="text-xl md:text-2xl mb-4">
              We{" "}
              <span className="text-5xl md:text-7xl font-semibold px-2 md:px-3">collaborate</span>{" "}
              with farmers, distributors, retailers, and mango enthusiasts,
              fostering a network that supports mutual growth.
            </p>
          </div>
        </div>

        {/* REVOLUTION */}
        <div className="w-full flex flex-wrap items-center">
          <div className="w-1/12"></div>
          <div className="relative aspect-square w-3/12">
            <div className="h-full grid grid-cols-2">
              <div className="relative h-full rounded-tl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-tr-full bg-gray-800"></div>
              <div className="relative h-full rounded-bl-full bg-transparent">
                <div className="absolute top-0 right-0 w-1 md:w-1.5 lg:w-2 h-full bg-gray-800"></div>
              </div>
              <div className="h-full rounded-br-full bg-gray-800"></div>
            </div>
            <div className="absolute top-[5%] left-[5%] z-10 w-[90%] h-[90%] rounded-full bg-[#e5e6e4] p-2">
              <div
                className="h-full rounded-full bg-cover shadow-2xl"
                style={{
                  backgroundImage: `url(${Revolution})`,
                }}
              ></div>
            </div>
          </div>
          <div className="w-6/12 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          <div className="relative aspect-square h-4 sm:h-8 md:h-12 lg:h-16 rounded-full bg-gray-800">
            <div className="absolute top-1/2 -translate-y-1/2 w-1/2 h-2 md:h-3 lg:h-4 bg-gray-800"></div>
          </div>
        </div>
        <div className="w-full flex flex-wrap">
          <div className="w-1/12"></div>
          <div className="w-3/12 h-FULL flex flex-col items-center">
            <div className="w-2 md:w-3 lg:w-4 h-full bg-gray-800"></div>
          </div>
          <div className="w-6/12 pt-4 pb-14">
            <p className="text-5xl md:text-7xl font-semibold mb-4">
              Join the SmartMango Revolution
            </p>
            <p className="text-xl md:text-2xl mb-2">
              Together, let's shape an industry where every mango tells a story
              of:
            </p>
            <div className="grid grid-cols-2 justify-center items-center gap-2 pl-4">
              <p className="text-xl md:text-2xl italic">Innovation</p>
              <p className="w-full rounded-full pr-2 text-right text-md center bg-lime-800 text-white">
                100%
              </p>
              <p className="text-xl md:text-2xl italic">Quality</p>
              <p className="w-full rounded-full pr-2 text-right text-md center bg-lime-800 text-white">
                100%
              </p>
              <p className="text-xl md:text-2xl italic">Shared success</p>
              <p className="w-full rounded-full pr-2 text-right text-md bg-lime-800 text-white">
                100%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
