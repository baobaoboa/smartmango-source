import { Card } from "flowbite-react";
import { IconContext } from "react-icons";
import {
  FaEye,
  FaHandHoldingHeart,
  FaBoxOpen,
  FaUsers,
  FaBullhorn,
} from "react-icons/fa6";

import LandingHero from "../assets/landing_hero.png";
import LandingSolutions1 from "../assets/landing_solutions_1.jpg";
import LandingSolutions2 from "../assets/landing_solutions_2.png";
import LandingSolutions3 from "../assets/landing_solutions_3.png";

export default function LandingPage() {
  return (
    <div className="snap-y snap-mandatory">
      {/* Hero */}
      <div
        className="snap-always snap-center grid place-items-center h-screen text-white"
        style={{
          backgroundImage: `url(${LandingHero})`,
          backgroundSize: "cover",
        }}
      >
        <div className="w-5/6">
          <p className="font-bold text-8xl mb-20">The Beauty of Sorting</p>
          <p className="font-light text-4xl leading-[3rem]">
            At SmartMango, we believe in the transformative power of innovation.
            Just as the Carabao mango undergoes a journey of growth and
            ripening, our technology evolves to redefine the way mangoes are
            sorted and classified. Through our commitment to research and
            development, we tackle complex challenges in the Carabao mango
            industry, turning them into valuable solutions. Powered by
            cutting-edge AI and computer vision, we're not just sorting mangoes
            - we're shaping the future of the Carabao mango industry.
          </p>
        </div>
      </div>
      {/* End of hero */}

      {/* About */}
      <div
        className="snap-always snap-center grid place-items-center"
        style={{
          background: "linear-gradient(180deg, #A7D46F 80%, transparent)",
        }}
      >
        <div className="w-5/6 py-20">
          <div className="mb-24">
            <p className="text-sm text-gray-600 mb-4">
              WELCOME TO SMARTMANGO - WHERE THE FUTURE OF CARABAO MANGO FARMING
              IS RIPE WITH POSSIBILITIES!
            </p>
            <p className="font-bold text-8xl mb-20">About SmartMango</p>
            <p className="font-light text-4xl leading-[3rem]">
              At SmartMango, we're not just a company; we're a passion-driven
              team dedicated to revolutionizing the Carabao mango industry.
              Inspired by the lusciousness of the Carabao mango and the
              potential of cutting-edge technology, SmartMango emerged as a
              pioneering force in the field of agricultural innovation.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap items-start place-content-center gap-5">
            <Card
              className="max-w-sm py-5 border-0"
              style={{ backgroundColor: "#537B2F" }}
            >
              <div className="flex flex-col gap-2 items-center">
                <IconContext.Provider
                  value={{
                    className: "shared-class",
                    size: 48,
                    color: "white",
                  }}
                >
                  <FaEye />
                </IconContext.Provider>
                <h5 className="mt-6 mb-3 font-bold text-3xl tracking-tight text-white">
                  <p>Vision</p>
                </h5>
                <p className="text-lg text-white">
                  <p>
                    Our vision is simple yet profound: to enhance the Carabao
                    mango industry through smart, sustainable, and innovative
                    solutions. We envision a future where every Carabao mango
                    harvested, sorted, and delivered is of the highest quality,
                    creating value for both farmers and consumers.
                  </p>
                </p>
              </div>
            </Card>
            <Card
              className="max-w-sm py-5 border-0"
              style={{ backgroundColor: "#537B2F" }}
            >
              <div className="flex flex-col gap-2 items-center">
                <IconContext.Provider
                  value={{
                    className: "shared-class",
                    size: 48,
                    color: "white",
                  }}
                >
                  <FaHandHoldingHeart />
                </IconContext.Provider>
                <h5 className="mt-6 mb-3 font-bold text-3xl tracking-tight text-white">
                  <p>Empowering Farmers, Enriching Lives</p>
                </h5>
                <p className="text-lg text-white">
                  <p>
                    We understand the challenges faced by mango farmers - from
                    post-harvest losses to market demands. SmartMango is here to
                    empower farmers with state-of-the-art technology. Through
                    AI-driven sorting and classification systems, we ensure that
                    each mango meets the highest standards. This not only
                    maximizes yield but also boosts the livelihoods of the
                    hardworking farmers who nurture these delectable fruits.
                  </p>
                </p>
              </div>
            </Card>
            <Card
              className="max-w-sm py-5 border-0"
              style={{ backgroundColor: "#537B2F" }}
            >
              <div className="flex flex-col gap-2 items-center">
                <IconContext.Provider
                  value={{
                    className: "shared-class",
                    size: 48,
                    color: "white",
                  }}
                >
                  <FaBoxOpen />
                </IconContext.Provider>
                <h5 className="mt-6 mb-3 font-bold text-3xl tracking-tight text-white">
                  <p>The SmartMango Advantage</p>
                </h5>
                <p className="text-lg text-white">
                  <p>
                    What sets us apart is our commitment to innovation and
                    sustainability. Our cutting-edge solutions harness the power
                    of artificial intelligence and machine learning to sort
                    mangoes with unmatched precision. By reducing waste and
                    ensuring top-quality produce, we contribute to a more
                    sustainable agricultural ecosystem.
                  </p>
                </p>
              </div>
            </Card>
            <Card
              className="max-w-sm py-5 border-0"
              style={{ backgroundColor: "#537B2F" }}
            >
              <div className="flex flex-col gap-2 items-center">
                <IconContext.Provider
                  value={{
                    className: "shared-class",
                    size: 48,
                    color: "white",
                  }}
                >
                  <FaUsers />
                </IconContext.Provider>
                <h5 className="mt-6 mb-3 font-bold text-3xl tracking-tight text-white">
                  <p>Partnering for Progress</p>
                </h5>
                <p className="text-lg text-white">
                  <p>
                    SmartMango thrives on partnerships. We collaborate with
                    farmers, distributors, retailers, and mango enthusiasts,
                    fostering a network that supports mutual growth. Together,
                    we're building a future where technology and agriculture
                    coalesce seamlessly, resulting in a bountiful harvest for
                    everyone involved.
                  </p>
                </p>
              </div>
            </Card>
            <Card
              className="max-w-sm py-5 border-0"
              style={{ backgroundColor: "#537B2F" }}
            >
              <div className="flex flex-col gap-2 items-center">
                <IconContext.Provider
                  value={{
                    className: "shared-class",
                    size: 48,
                    color: "white",
                  }}
                >
                  <FaBullhorn />
                </IconContext.Provider>
                <h5 className="mt-6 mb-3 font-bold text-3xl tracking-tight text-white">
                  <p>Join the SmartMango Revolution</p>
                </h5>
                <p className="text-lg text-white">
                  <p>
                    Whether you're a farmer aiming for better yields, a
                    distributor in pursuit of quality produce, or a consumer
                    savoring the taste of perfection, SmartMango welcomes you to
                    join our revolution. Together, let's shape an industry where
                    every mango tells a story of innovation, quality, and shared
                    success.
                  </p>
                </p>
              </div>
            </Card>
          </div>
          {/* End of cards */}
        </div>
      </div>
      {/* End of about */}

      {/* Solutions */}
      <div className="snap-always snap-center grid place-items-center">
        <div className="w-5/6 py-20">
          <div className="mb-24">
            <p className="text-sm text-gray-600 mb-4">
              SMARTMANGO OFFERS VARIOUS SOLUTIONS
            </p>
            <p className="font-bold text-8xl">Our Solutions</p>

            {/* Boxes */}
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
              <div
                className="h-[25rem]"
                style={{
                  backgroundImage: `url(${LandingSolutions1})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div
                className="grid place-items-center p-8"
                style={{
                  backgroundColor: "rgba(167, 212, 111, 0.64)",
                }}
              >
                <div>
                  <p className="mb-5 text-3xl">
                    STORE, SORT, AND TRACK
                  </p>
                  <p>
                    Store your mango's data by sorting them to virtual carts and
                    be able to track the days before it ripens
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${LandingSolutions2})`,
                  backgroundSize: "cover",
                }}
              >
                03
              </div>
              <div
                className="grid place-items-center p-8"
                style={{
                  backgroundColor: "rgba(167, 212, 111, 0.64)",
                }}
              >
                <div>
                  <p className="mb-5 text-3xl">SCAN YOUR MANGO</p>
                  <p>
                    Take a snap of your Carabao Mango and be able to see the
                    details such as harvest status, shelf life, ripeness, and
                    grade by using your own web camera
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${LandingSolutions3})`,
                  backgroundSize: "cover",
                }}
              >
                05
              </div>
              <div
                className="grid place-items-center p-8"
                style={{
                  backgroundColor: "rgba(167, 212, 111, 0.64)",
                }}
              >
                <div>
                  <p className="mb-5 text-3xl">
                    MONITOR YOUR DATA
                  </p>
                  <p>Be able to see your data analytics in the dashboard</p>
                </div>
              </div>
            </div>
            {/* End of boxes */}
          </div>
        </div>
      </div>
      {/* End of solutions */}
    </div>
  );
}
