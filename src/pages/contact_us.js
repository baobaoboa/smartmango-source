import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import PlaceHolder from "../assets/placeholder.svg";
import IconLaptop from "../assets/icons/laptop.svg";
import IconContact from "../assets/icons/contact.svg";
import IconEmail from "../assets/icons/email.svg";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#FEF9ED]">
      <div className="flex flex-wrap px-6 sm:px-10">
        <div className="w-full pt-24 pb-7 text-center">
          <p className="text-5xl md:text-7xl font-semibold mb-3">
            The Dedicated Team
          </p>
          <p className="text-sm md:text-base">
            Meet the brilliant minds behind our platform
          </p>
        </div>

        {/* >= XL */}
        <div className="hidden w-full xl:flex flex-wrap pb-24">
          <div className="w=full flex justify-center items-end">
            <img
              src={PlaceHolder}
              alt="Place Holder"
              className="bg-gray-300 w-1/5 drop-shadow-lg"
            />
            <div className="w-1/5 h-1/2 flex flex-col justify-center items-center text-center p-4 bg-yellow-200">
              <p className="font-semibold text-base">Earlene Jan R. Mosquera</p>
              <p className="text-base">Web Developer</p>
              <object data={IconLaptop} className="w-6 order-first mb-6">
                "IconLaptop" Image
              </object>
            </div>
            <img
              src={PlaceHolder}
              alt="Place Holder"
              className="bg-gray-300 w-1/5 drop-shadow-lg"
            />
            <div className="w-1/5 h-1/2 flex flex-col justify-center items-center text-center p-4 bg-yellow-200">
              <p className="font-semibold text-base">Alodia Shane A. Puralan</p>
              <p className="text-base">Web Developer</p>
              <object data={IconLaptop} className="w-6 order-first mb-6">
                "IconLaptop" Image
              </object>
            </div>
            <img
              src={PlaceHolder}
              alt="Place Holder"
              className="bg-gray-300 w-1/5 drop-shadow-lg"
            />
          </div>
          <div className="w=full flex justify-center items-start">
            <div className="w-1/5 h-1/2 flex flex-col justify-center items-center text-center p-4 bg-yellow-200">
              <p className="font-semibold text-base">Lorenz Jedd M. Alvarez</p>
              <p className="text-base">Web Developer</p>
              <object data={IconLaptop} className="w-6 mt-6">
                "IconLaptop" Image
              </object>
            </div>
            <img
              src={PlaceHolder}
              alt="Place Holder"
              className="bg-gray-300 w-1/5 drop-shadow-lg"
            />
            <div className="w-1/5 h-1/2 flex flex-col justify-center items-center text-center p-4 bg-yellow-200">
              <p className="font-semibold text-base">Lady Lyn R. Privaldos</p>
              <p className="text-base">Web Developer</p>
              <object data={IconLaptop} className="w-6 mt-6">
                "IconLaptop" Image
              </object>
            </div>
            <img
              src={PlaceHolder}
              alt="Place Holder"
              className="bg-gray-300 w-1/5 drop-shadow-lg"
            />
            <div className="w-1/5 h-1/2 flex flex-col justify-center items-center text-center p-4 bg-yellow-200">
              <p className="font-semibold text-base">Ma. Camille F. Reyes</p>
              <p className="text-base">Web Developer</p>
              <object data={IconLaptop} className="w-6 mt-6">
                "IconLaptop" Image
              </object>
            </div>
          </div>
        </div>

        {/* < XL */}
        <div className="xl:hidden w-full flex flex-wrap space-y-6 pb-24">
          {/* JEDD */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="max-w-sm">
              <img
                src={PlaceHolder}
                alt="Place Holder"
                className="drop-shadow-lg bg-gray-300"
              />
              <div className="flex flex-col items-center p-4 text-center bg-yellow-200">
                <p className="font-semibold text-xl">Lorenz Jedd M. Alvarez</p>
                <p className="text-base">Web Developer</p>
                <object data={IconLaptop} className="w-6 mt-6">
                  "IconLaptop" Image
                </object>
              </div>
            </div>
          </div>

          {/* EARLENE */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="max-w-sm">
              <img
                src={PlaceHolder}
                alt="Place Holder"
                className="drop-shadow-lg bg-gray-300"
              />
              <div className="flex flex-col items-center p-4 text-center bg-yellow-200">
                <p className="font-semibold text-xl">Earlene Jan R. Mosquera</p>
                <p className="text-base">Web Developer</p>
                <object data={IconLaptop} className="w-6 mt-6">
                  "IconLaptop" Image
                </object>
              </div>
            </div>
          </div>

          {/* LADY */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="max-w-sm">
              <img
                src={PlaceHolder}
                alt="Place Holder"
                className="drop-shadow-lg bg-gray-300"
              />
              <div className="flex flex-col items-center p-4 text-center bg-yellow-200">
                <p className="font-semibold text-xl">Lady Lyn R. Privaldos</p>
                <p className="text-base">Web Developer</p>
                <object data={IconLaptop} className="w-6 mt-6">
                  "IconLaptop" Image
                </object>
              </div>
            </div>
          </div>

          {/* ALODIA */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="max-w-sm">
              <img
                src={PlaceHolder}
                alt="Place Holder"
                className="drop-shadow-lg bg-gray-300"
              />
              <div className="flex flex-col items-center p-4 text-center bg-yellow-200">
                <p className="font-semibold text-xl">Alodia Shane A. Puralan</p>
                <p className="text-base">Web Developer</p>
                <object data={IconLaptop} className="w-6 mt-6">
                  "IconLaptop" Image
                </object>
              </div>
            </div>
          </div>

          {/* CAMILLE */}
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="max-w-sm">
              <img
                src={PlaceHolder}
                alt="Place Holder"
                className="drop-shadow-lg bg-gray-300"
              />
              <div className="flex flex-col items-center p-4 text-center bg-yellow-200">
                <p className="font-semibold text-xl">Ma. Camille F. Reyes</p>
                <p className="text-base">Web Developer</p>
                <object data={IconLaptop} className="w-6 mt-6">
                  "IconLaptop" Image
                </object>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-16 mb-16 space-y-12 md:space-y-0 bg-yellow-200">
        <div className="w-full md:w-auto text-center md:text-start">
          <p className="text-6xl mb-3">Contact Us</p>
          <p className="text-base">We look forward to hearing from you!</p>
        </div>
        <div className="w-full md:w-auto flex flex-row items-center justify-center md:justify-end space-x-4">
          <div className="flex flex-col items-center">
            <object data={IconContact} className="w-8 mb-2">
              "IconContact" Image
            </object>
            <p className="text-sm">Put number here</p>
          </div>
          <div className="flex flex-col items-center">
            <object data={IconEmail} className="w-8 mb-2">
              "IconEmail" Image
            </object>
            <p className="text-sm">Put email here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
