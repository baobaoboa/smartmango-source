import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import HeaderDashboard from "../../../assets/header_dashboard_background.svg";
import Notification from "../../../assets/icons/notification.svg";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E3E3E3]">
      <div className="h-full x-0 xl:pl-72 pt-16">
        <div
          className="relative bg-cover h-56 p-8"
          style={{
            backgroundImage: `url(${HeaderDashboard})`,
          }}
        >
          <div className="w-full flex flex-col space-y-4">
            <div className="w-full flex flex-row justify-between">
              <p className="text-xl md:text-3xl text-white">Dashboard</p>
              <button
                type="submit"
                className="rounded-lg border-0 hover:border-0 outline-0 bg-transparent hover:bg-transparent"
              >
                <object data={Notification} className="w-8">
                  "Notification" Image
                </object>
              </button>
            </div>
            <div className="w-full flex flex-nowrap overflow-x-auto space-x-4 bg-red-300">
              <div className="w-[25rem] bg-white">
                <p>A</p>
              </div>
              <div className="w-[25rem] bg-white">
                <p>A</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-30 px-2 md:px-10 mt-8 bg-white">hey</div>
      </div>
    </div>
  );
}