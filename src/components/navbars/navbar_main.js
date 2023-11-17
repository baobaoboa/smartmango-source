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
      // Main
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

  return page === "SIGN IN" ? (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full drop-shadow-xl bg-yellow-400"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md m-0 p-2 hover:bg-yellow-800 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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
                    className="text-lg font-semibold"
                    aria-current="page"
                  >
                    
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
                            ? "bg-yellow-800 text-white"
                            : "hover:bg-yellow-800 hover:text-white",
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

          <Disclosure.Panel className="md:hidden bg-yellow-500">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-yellow-800 text-white"
                      : "hover:bg-yellow-800 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-semibold text-end ease-linear transition-all duration-150"
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
  ) : page === "ABOUT" ? (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full drop-shadow-xl bg-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md m-0 p-2 hover:bg-lime-300 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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
                    className="text-lg font-semibold"
                    aria-current="page"
                  >
                    
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
                            ? "bg-lime-300 bg-lime"
                            : "hover:bg-lime-300",
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

          <Disclosure.Panel className="md:hidden bg-lime-300">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-lime-400 bg-lime" : "hover:bg-lime-400",
                    "block rounded-md px-3 py-2 text-base font-semibold text-end ease-linear transition-all duration-150"
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
  ) : page === "SOLUTIONS" ? (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full drop-shadow-xl bg-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md m-0 p-2 hover:bg-lime-700 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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
                    className="text-lg font-semibold"
                    aria-current="page"
                  >
                    
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
                            ? "bg-lime-700 text-white"
                            : "hover:bg-lime-700 hover:text-white",
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

          <Disclosure.Panel className="md:hidden bg-lime-700">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-lime-800 text-white"
                      : "text-white hover:bg-lime-800",
                    "block rounded-md px-3 py-2 text-base font-semibold text-end ease-linear transition-all duration-150"
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
  ) : page === "CONTACT US" ? (
    <Disclosure
      as="nav"
      className="fixed top-0 z-50 w-full drop-shadow-xl bg-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md m-0 p-2 hover:bg-yellow-600 text-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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
                    className="text-lg font-semibold"
                    aria-current="page"
                  >
                    
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
                            ? "bg-yellow-600 text-white"
                            : "hover:bg-yellow-600 hover:text-white",
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

          <Disclosure.Panel className="md:hidden bg-yellow-600">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-yellow-700 text-white"
                      : "text-white hover:bg-yellow-700",
                    "block rounded-md px-3 py-2 text-base font-semibold text-end ease-linear transition-all duration-150"
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
  ) : (
    <Disclosure as="nav" className="fixed top-0 z-50 w-full bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 md:px-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md m-0 p-2 hover:bg-gradient-to-r from-[#FEED92] via-[#D3D7D6] to-[#B5D789] text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
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
                    className="text-lg font-semibold"
                    aria-current="page"
                  >
                    
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
                            ? "bg-gradient-to-r from-[#FEED92] via-[#D3D7D6] to-[#B5D789]"
                            : "bg-gradient-to-r hover:from-[#FEED92] hover:via-[#D3D7D6] hover:to-[#B5D789]",
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

          <Disclosure.Panel className="md:hidden bg-transparent">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gradient-to-r from-[#FEED92] via-[#D3D7D6] to-[#B5D789]"
                      : "bg-gradient-to-r hover:from-[#FEED92] hover:via-[#D3D7D6] hover:to-[#B5D789]",
                    "block rounded-md px-3 py-2 text-base font-semibold text-end ease-linear transition-all duration-150"
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
