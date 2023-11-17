import { useState } from "react";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import Background from "../../assets/auth_background.png";
import Mango from "../../assets/auth_mango.png";

// ~ ~ ~ ~ ~ Componenets ~ ~ ~ ~ ~ //
import PrivacyPolicy from "../../components/modals/privacy_policy";

export default function SignUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = (isModalOpen) => {
    setIsModalOpen(isModalOpen);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover px-6"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div
        className="w-4/5 xl:w-3/5 flex flex-wrap justify-center items-center rounded-3xl shadow-2xl px-16 pt-12 pb-4 bg-cover space-y-6 xl:space-y-0"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        {/* LEFT */}
        <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start">
          <p className="text-5xl xl:text-7xl font-semibold mb-6 text-center xl:text-start">
            Create account
          </p>
          <object data={Mango} className="w-1/2 md:w-1/3 xl:w-4/5">
            "Mango" Image
          </object>
        </div>

        {/* RIGHT */}
        <div className="w-full xl:w-1/2 space-y-6">
          <div className="w-full flex flex-wrap items-center self-center">
            <hr className="h-0.5 flex-grow border-0 bg-black" />
            <p className="text-sm md:text-base mx-8">Create account form</p>
            <hr className="h-0.5 flex-grow border-0 bg-black" />
          </div>

          {/* SIGN UP */}
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
              <label htmlFor="password" className="w-full text-sm md:text-base">
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
            <div className="w-full flex flex-col space-y-2">
              <label htmlFor="password" className="w-full text-sm md:text-base">
                CONFIRM PASSWORD
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                placeholder="Your confirm password"
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
                I agree with the&nbsp;
                <button
                  type="button"
                  onClick={openModal}
                  className="border-0 hover:border-0 hover:drop-shadow-md ease-linear transition-all duration-150 font-semibold text-sm md:text-base bg-transparent hover:bg-transparent text-black m-0 p-0"
                  aria-current="page"
                >
                  Privacy Policy
                </button>
                {isModalOpen && <PrivacyPolicy closeModal={closeModal} />}
              </label>
            </div>
            <button
              type="submit"
              className="rounded-lg hover:shadow-lg border-0 hover:border-0 outline-0 ease-linear transition-all duration-150 items-center text-sm md:text-base mx-4 px-5 py-2.5 text-center font-semibold bg-lime-800 hover:bg-lime-900 text-white hover:text-white"
            >
              CREATE ACCOUNT
            </button>
          </form>

          <div className="w-full flex justify-end px-4">
            <a
              key="SIGN IN"
              href="/"
              className="text-sm md:text-base hover:drop-shadow-md ease-linear transition-all duration-150"
              aria-current="page"
            >
              Already registered?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
