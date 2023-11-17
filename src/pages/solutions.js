import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import Background from "../assets/solutions_background.svg";
import Scan from "../assets/solutions_scan.svg";
import Monitor from "../assets/solutions_monitor.svg";
import Store from "../assets/solutions_store.svg";

export default function Solutions() {
  return (
    <div
      className="min-h-screen lg:h-screen bg-[#FBFFF5]"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="h-full flex flex-col px-6 sm:px-10">
        <div className="w-full lg:min-h-min pt-24 pb-10 lg:pb-0">
          <p className="text-sm md:text-base mb-3">
            SMARTMANGO OFFERS VARIOUS SOLUTIONS
          </p>
          <p className="text-5xl md:text-7xl font-semibold">Our Solutions</p>
        </div>

        <div className="w-full h-full flex flex-wrap justify-center gap-10 pb-24">
          {/* Left Side */}
          <div className="w-full lg:w-1/6 flex flex-wrap justify-center items-center">
            <object data={Scan} className="h-full lg:w-full">
              "Scan" Image
            </object>
          </div>

          {/* Middle Side */}
          <div className="w-full lg:w-2/6 flex flex-wrap justify-center items-center">
            <object data={Monitor} className="h-full lg:w-full">
              "Monitor" Image
            </object>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-2/6 flex flex-wrap justify-center items-center">
            <object data={Store} className="h-full lg:w-full">
              "Store" Image
            </object>
          </div>
        </div>
      </div>
    </div>
  );
}
