import { IconContext } from "react-icons";
import { FaLock } from "react-icons/fa6";

import Background from "../../assets/layout_auth_background.png";

// Components
import { Card, Button, Label, TextInput } from "flowbite-react";

export default function ForgotPassword({ onSwitch }) {
  const handleSwitch = (component) => {
    onSwitch(component);
  };

  return (
    <Card
      className="xl:w-3/4 lg:w-5/6 w-full rounded-3xl border-0 shadow-2xl p-10 my-10"
      style={{
        backgroundColor: "#C5C5C5",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-wrap gap-5 items-center">
        {/* Left part */}
        <div className="flex-grow lg:basis-1">
          <div className="flex flex-col items-center lg:items-start">
            <p className="hidden lg:block font-semibold text-6xl mb-8">
              Trouble
              <br />
              signing in?
            </p>
            <p className="block lg:hidden font-semibold text-6xl mb-8">
              Trouble signing in?
            </p>
            <p className="text-xl text-gray-600">
              Enter email and we’ll send you a link to get back into your
              account.
            </p>
          </div>
        </div>
        {/* End of left part */}

        {/* Right part */}
        <div className="flex-grow lg:basis-1">
          <div className="flex flex-col gap-5 items-center">
            {/* Upper part */}
            <IconContext.Provider
              value={{ className: "shared-class", size: 200 }}
            >
              <FaLock />
            </IconContext.Provider>
            {/* End of upper Part */}

            <div className="w-full flex flex-col self-center gap-4 md:px-12 lg:px-8 xl:px-12">
              {/* Forgot password */}
              <form className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="EMAIL" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="Email"
                    required
                    type="email"
                    shadow
                    style={{ backgroundColor: "rgba(240, 252, 255, 0.31)" }}
                    className="mx-5 rounded-lg outline-none focus:outline-none shadow hover:shadow-lg ease-linear transition-all duration-150"
                  />
                </div>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#564E25" }}
                  className="mx-5 outline-none focus:outline-none shadow hover:shadow-lg ease-linear transition-all duration-150 font-bold"
                >
                  SEND LOGIN LINK
                </Button>
              </form>
              {/* End of forgot password */}

              {/* Lower part */}
              <div className="flex flex-wrap">
                <div className="flex-grow text-end">
                  <button
                    type="button"
                    className="text-sm hover:font-bold ease-linear transition-all duration-150"
                    onClick={() => handleSwitch("signIn")}
                  >
                    Back to login
                  </button>
                </div>
              </div>
              {/* End of lower part */}
            </div>
          </div>
        </div>
        {/* End of right part */}
      </div>
    </Card>
  );
}
