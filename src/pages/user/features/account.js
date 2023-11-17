import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import HeaderAccount from "../../../assets/header_account_background.svg";
import Notification from "../../../assets/icons/notification.svg";
import DisplayName from "../../../assets/icons/display_name.svg";
import Email from "../../../assets/icons/email.svg";
import Password from "../../../assets/icons/password.svg";
import ConfirmPassword from "../../../assets/icons/confirm_password.svg";
import Address from "../../../assets/icons/address.svg";

export default function Account() {
  return (
    <div className="min-h-screen flex flex-col bg-[#E3E3E3]">
      <div className="h-full x-0 xl:pl-72 pt-16">
        <div
          className="relative bg-cover h-56 p-8"
          style={{
            backgroundImage: `url(${HeaderAccount})`,
          }}
        >
          <div className="w-full flex items-top justify-between">
            <p className="text-xl md:text-3xl text-white">My Account</p>
            <button
              type="submit"
              className="rounded-lg border-0 hover:border-0 outline-0 bg-transparent hover:bg-transparent"
            >
              <object data={Notification} className="w-8">
                "Notification" Image
              </object>
            </button>
          </div>
        </div>

        <div className="relative z-30 px-2 md:px-10 -mt-8">
          <div className="flex flex-col">
            <form
              className="shadow-lg rounded-lg flex flex-col items-center space-y-6 bg-white p-4 md:p-12"
              method="post"
            >
              {/* CONTACT INFORMATION */}
              <div className="flex flex-wrap">
                <p className="w-full text-xl md:text-3xl font-semibold">
                  User Information
                </p>
                <div className="w-full md:w-1/2 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="display_name"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    DISPLAY NAME
                  </label>
                  <object data={DisplayName} className="w-6">
                    "DISPLAY NAME" Image
                  </object>
                  <input
                    type="text"
                    id="display_name"
                    name="display_name"
                    placeholder="Your name"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="email"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    EMAIL ADDRESS
                  </label>
                  <object data={Email} className="w-6 fill-black filter-black">
                    "EMAIL ADDRESS" Image
                  </object>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="password"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    PASSWORD
                  </label>
                  <object data={Password} className="w-6">
                    "PASSWORD" Image
                  </object>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="confirm_password"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    CONFIRM PASSWORD
                  </label>
                  <object data={ConfirmPassword} className="w-6">
                    "CONFIRM PASSWORD" Image
                  </object>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Your confirm password"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
              </div>

              <hr className="w-11/12 h-0.5 opacity-20 border-0 bg-black" />

              {/* CONTACT INFORMATION */}
              <div className="flex flex-wrap">
                <p className="w-full text-xl md:text-3xl font-semibold">
                  Contact Information
                </p>
                <div className="w-full flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="address"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    ADDRESS
                  </label>
                  <object data={Address} className="w-6">
                    "ADDRESS" Image
                  </object>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your address"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="city"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    CITY
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Your city"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="country"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    COUNTRY
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Your country"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
                <div className="w-1/2 md:w-1/3 flex flex-wrap px-8 py-4 space-y-2">
                  <label
                    htmlFor="postal_code"
                    className="w-full text-md md:text-lg font-semibold"
                  >
                    POSTAL CODE
                  </label>
                  <input
                    type="text"
                    id="postal_code"
                    name="postal_code"
                    placeholder="Your postal code"
                    className="flex-grow rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  />
                </div>
              </div>

              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="w-40 rounded-lg hover:shadow-lg border-0 hover:border-0 outline-0 ease-linear transition-all duration-150 items-center text-sm md:text-base mx-4 px-5 py-2.5 text-center font-semibold bg-lime-700 hover:bg-lime-800 text-white hover:text-white"
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
