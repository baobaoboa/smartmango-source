import React from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import Background from "../../assets/auth_background.png";

export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover px-6"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        className="max-w-max flex flex-col justify-center items-center rounded-3xl shadow-2xl px-16 pt-12 pb-4 bg-cover"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <p className="text-5xl md:text-7xl font-semibold mb-4">
          Trouble signing in?
        </p>
        <p className="text-lg md:text-xl mb-8">
          Enter email and we'll send you a link to get back into your account.
        </p>

        {/* RESET PASSWORD */}
        <form className="w-3/4 flex flex-col space-y-6 mb-6">
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
          <button
            type="submit"
            className="rounded-lg hover:shadow-lg border-0 hover:border-0 outline-0 ease-linear transition-all duration-150 items-center text-sm md:text-base mx-4 px-5 py-2.5 text-center font-semibold bg-lime-800 hover:bg-lime-900 text-white hover:text-white"
          >
            RESET PASSWORD
          </button>
        </form>

        <div className="w-3/4 flex justify-end px-4">
          <a
            key="SIGN IN"
            href="/"
            className="text-sm md:text-base hover:drop-shadow-md ease-linear transition-all duration-150"
            aria-current="page"
          >
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
