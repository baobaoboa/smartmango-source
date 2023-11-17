import Background from "../../assets/layout_auth_background.png";
import Mango from "../../assets/component_auth_mango.png";
import Google from "../../assets/google.svg";

// Components
import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function SignIn({ onSwitch }) {
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
              Welcome
              <br />
              back!
            </p>
            <p className="block lg:hidden font-semibold text-6xl mb-8">
              Welcome back!
            </p>
            <img
              src={Mango}
              className="h-72 object-scale-down"
              alt="SmartMango Logo"
            />
          </div>
        </div>
        {/* End of left part */}

        {/* Right part */}
        <div className="flex-grow lg:basis-1">
          <div className="flex flex-col gap-5 ">
            {/* Upper part */}
            <div className="w-full text-center">
                <p className="text-sm mb-2">Do you wanna sign in with gmail?</p>
                <button
                  className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none shadow hover:shadow-lg inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type="button"
                >
                  <img src={Google} alt="Google" class="w-5 mr-2" />
                  Google
                </button>
            </div>
            {/* End of upper Part */}

            {/* Horizontal line */}
            <div className="w-full flex flex-wrap items-center self-center">
              <hr className="flex-grow border border-black" />
              <p className="text-sm mx-10">or sign in with credentials</p>
              <hr className="flex-grow border border-black" />
            </div>
            {/* End of horizontal line */}

            <div className="w-full flex flex-col self-center gap-4 md:px-12 lg:px-8 xl:px-12">
              {/* Sign in */}
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
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="PASSWORD" />
                  </div>
                  <TextInput
                    id="password"
                    placeholder="Password"
                    required
                    type="password"
                    shadow
                    color="gray"
                    style={{ backgroundColor: "rgba(240, 252, 255, 0.31)" }}
                    className="mx-5 rounded-lg outline-none focus:outline-none shadow hover:shadow-lg ease-linear transition-all duration-150"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember"
                    className="rounded outline-none focus:outline-none shadow hover:shadow-lg ease-linear transition-all duration-150"
                  />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#564E25" }}
                  className="mx-5 outline-none focus:outline-none shadow hover:shadow-lg ease-linear transition-all duration-150 font-bold"
                >
                  SIGN IN
                </Button>
              </form>
              {/* End of sign in */}

              {/* Lower part */}
              <div className="flex flex-wrap">
                <div className="flex-grow text-start">
                  <button
                    type="button"
                    className="text-sm hover:font-bold ease-linear transition-all duration-150"
                    onClick={() => handleSwitch("forgotPassword")}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="flex-grow text-end">
                  <button
                    type="button"
                    className="text-sm hover:font-bold ease-linear transition-all duration-150"
                    onClick={() => handleSwitch("signUp")}
                  >
                    Create new account
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
