import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// ~ ~ ~ ~ ~ Components ~ ~ ~ ~ ~ //
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
import HeaderSmartMango from "../../assets/smartmango.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ navbar_main.js ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //
export default function NavbarMain() {
  const [page, setPage] = useState();
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      // Auth
      case "/":
        setPage("SIGN IN");
        break;

      // Main
      case "/about":
        setPage("ABOUT");
        break;
      case "/solutions":
        setPage("SOLUTIONS");
        break;
      case "/contact_us":
        setPage("CONTACT US");
        break;

      // Features
      case "/users/":
        setPage("DASHBOARD");
        break;
      case "/user/scan_mango":
        setPage("SCAN MANGO");
        break;
      case "/user/account":
        setPage("ACCOUNT");
        break;

      // Storages
      case "/user/unripe":
        setPage("UNRIPE");
        break;
      case "/user/early_ripe":
        setPage("EARLY RIPE");
        break;
      case "/user/partially_ripe":
        setPage("PARTIALLY RIPE");
        break;
      case "/user/ripe":
        setPage("RIPE");
        break;
      case "/user/overripe":
        setPage("OVER RIPE");
        break;

      default:
        break;
    }
  }, [location.pathname]);

  const navigation = [
    { name: "ABOUT", href: "/about", current: page === "ABOUT" ? true : false },
    {
      name: "SOLUTIONS",
      href: "/solutions",
      current: page === "SOLUTIONS" ? true : false,
    },
    {
      name: "CONTACT US",
      href: "/contact_us",
      current: page === "CONTACT US" ? true : false,
    },
  ];
  const features = [
    {
      name: "DASHBOARD",
      href: "/user/",
      current: page === "DASHBOARD" ? true : false,
    },
    {
      name: "SCAN MANGO",
      href: "/user/scan_mango",
      current: page === "SCAN MANGO" ? true : false,
    },
    {
      name: "ACCOUNT",
      href: "/user/account",
      current: page === "ACCOUNT" ? true : false,
    },
  ];
  const storages = [
    {
      name: "UNRIPE",
      href: "/user/unripe",
      current: page === "UNRIPE" ? true : false,
    },
    {
      name: "EARLY RIPE",
      href: "/user/early_ripe",
      current: page === "EARLY RIPE" ? true : false,
    },
    {
      name: "PARTIALLY RIPE",
      href: "/user/partially_ripe",
      current: page === "PARTIALLY RIPE" ? true : false,
    },
    {
      name: "RIPE",
      href: "/user/ripe",
      current: page === "RIPE" ? true : false,
    },
    {
      name: "OVER RIPE",
      href: "/user/overripe",
      current: page === "OVER RIPE" ? true : false,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full bg-gray-50 drop-shadow-xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md m-0 p-2 hover:bg-black text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <div className="flex md:items-center">
                  <a
                    key="SIGN IN"
                    href="/"
                    className="text-lg font-semibold md:ml-16 xl:ml-0"
                    aria-current="page"
                  >
                    <object data={HeaderSmartMango} className="inline-flex mr-4 w-8">
                      "HeaderSmartMango" Image
                    </object>
                    SMARTMANGO
                  </a>
                </div>
                <div className="flex-grow hidden md:ml-6 md:block">
                  <div className="flex justify-end md:space-x-3 lg:space-x-10">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-black text-white"
                            : "hover:bg-black hover:text-white",
                          "rounded-md px-3 py-2 text-lg font-semibold ease-linear transition-all duration-150"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden bg-gray-200">
            {/* Main */}
            <div className="md:hidden space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-semibold ease-linear transition-all duration-150"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            <hr className="md:hidden h-0.5 opacity-20 border-0 bg-black mx-4" />

            {/* FEATURES */}
            <div className="space-y-1 px-2 pb-3 pt-2">
              <p className="font-semibold text-lg px-3">FEATURES</p>

              {features.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white",
                    "block rounded-md px-6 py-2 text-base font-semibold ease-linear transition-all duration-150"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>

            <hr className="h-0.5 opacity-20 border-0 bg-black mx-4" />

            {/* STORAGES */}
            <div className="space-y-1 px-2 pb-3 pt-2">
              <p className="font-semibold text-lg px-3">STORAGES</p>

              {storages.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white",
                    "block rounded-md px-6 py-2 text-base font-semibold ease-linear transition-all duration-150"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
