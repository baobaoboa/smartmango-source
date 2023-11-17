import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import LImage from "../../assets/sign_in_left.svg";
import RImage from "../../assets/sign_in_right.svg";
import IconGoogle from "../../assets/icons/google.svg";

export default function SignIn() {
  return (
    <div className="min-h-screen 2xl:h-screen bg-[#FFF1CF]">
      <div className="h-full flex flex-wrap items-center">
        {/* LEFT */}
        <div
          className="relative h-screen 2xl:h-full w-full 2xl:w-1/2 flex flex-col justify-center items-center space-y-16 pt-24 2xl:pt-0 pr-8 bg-center"
          style={{
            backgroundImage: `url(${LImage})`,
          }}
        >
          {/* GOOGLE SIGN IN */}
          <div className="w-3/4 flex flex-wrap items-center space-y-6 lg:space-y-0">
            <p className="w-full lg:w-1/2 text-5xl md:text-7xl text-center lg:text-start font-semibold">
              Welcome back!
            </p>
            <div className="w-full lg:w-1/2 flex flex-col items-center space-y-2">
              <p className="text-sm md:text-base">
                Do you wanna sign in with gmail?
              </p>
              <button
                type="button"
                class="w-max inline-flex items-center rounded-lg hover:shadow-lg border-0 hover:border-0 outline-0 ease-linear transition-all duration-150 text-sm md:text-base px-5 py-2.5 text-center font-semibold bg-white text-black"
              >
                <img src={IconGoogle} alt="Google" className="w-4 mr-2" />
                GOOGLE
              </button>
            </div>
          </div>

          <div className="w-1/2 flex flex-col">
            <div className="w-full flex flex-wrap items-center self-center mb-8">
              <hr className="h-0.5 flex-grow border-0 bg-black" />
              <p className="text-sm md:text-base mx-8">
                or sign in with credentials
              </p>
              <hr className="h-0.5 flex-grow border-0 bg-black" />
            </div>

            {/* SIGN IN */}
            <form className="flex flex-col space-y-6">
              <div className="w-full flex flex-col space-y-2">
                <label htmlFor="email" className="w-full text-sm md:text-base">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  required
                />
              </div>
              <div className="w-full flex flex-col space-y-2">
                <label
                  htmlFor="password"
                  className="w-full text-sm md:text-base"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Your password"
                  className="rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 mx-4 bg-[#F0FCFF50] text-black"
                  required
                />
              </div>
              <div className="w-full flex flex-row items-center justify-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="flex-shrink rounded-md shadow-lg hover:shadow-xl border-[#161A1B50] ease-linear transition-all duration-150 bg-[#F0FCFF50] text-black"
                />
                <label
                  htmlFor="remember"
                  className="flex-grow text-sm md:text-base"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="rounded-lg hover:shadow-lg border-0 hover:border-0 outline-0 ease-linear transition-all duration-150 items-center text-sm md:text-base mx-4 px-5 py-2.5 text-center font-semibold bg-yellow-600 hover:bg-yellow-700 text-white hover:text-white"
              >
                SIGN IN
              </button>
              <div className="w-full flex flex-row justify-between">
                <a
                  key="FORGOT PASSWORD"
                  href="/forgot_password"
                  className="text-sm md:text-base hover:drop-shadow-md ease-linear transition-all duration-150"
                  aria-current="page"
                >
                  Forgot password?
                </a>
                <a
                  key="SIGN UP"
                  href="/sign_up"
                  className="text-sm md:text-base hover:drop-shadow-md ease-linear transition-all duration-150"
                  aria-current="page"
                >
                  Create new account
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="h-screen 2xl:h-auto w-full 2xl:w-1/2 pt-24 2xl:pt-0 px-6 sm:px-10 2xl:px-0 2xl:pr-10">
          <div className="flex flex-col space-y-4">
            <div className="text-right">
              <p className="text-5xl md:text-7xl mb-3">
                Sort and keep track of your Carabao Mango.
              </p>
              <p className="text-sm md:text-base">
                Powered by cutting-edge AI and computer vision.
              </p>
            </div>
            <div className="flex justify-center">
              <object data={RImage} className="w-3/4 2xl:w-5/6">
                "Sort and keep track of your Carabao Mango." Image
              </object>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
