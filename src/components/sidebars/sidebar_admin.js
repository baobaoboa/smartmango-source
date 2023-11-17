import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// ~ ~ ~ ~ ~ Assets ~ ~ ~ ~ ~ //
// Features
import IconDashboard from "../../assets/icons/dashboard.svg";
import IconScanMango from "../../assets/icons/scan_mango.svg";
import IconAccount from "../../assets/icons/account.svg";

// Storages

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LayoutMain() {
  const [page, setPage] = useState();
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
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

  const features = [
    {
      icon: IconDashboard,
      name: "Dashboard",
      href: "/user/",
      current: page === "DASHBOARD" ? true : false,
    },
    {
      icon: IconScanMango,
      name: "Scan Mango",
      href: "/user/scan_mango",
      current: page === "SCAN MANGO" ? true : false,
    },
    {
      icon: IconAccount,
      name: "Account",
      href: "/user/account",
      current: page === "ACCOUNT" ? true : false,
    },
  ];
  const storages = [
    {
      icon: IconDashboard,
      name: "Unripe",
      color: "#000000",
      href: "/user/unripe",
      current: page === "UNRIPE" ? true : false,
    },
    {
      icon: IconDashboard,
      name: "Early Ripe",
      color: "#000000",
      href: "/user/early_ripe",
      current: page === "EARLY RIPE" ? true : false,
    },
    {
      icon: IconDashboard,
      name: "Partially Ripe",
      color: "#000000",
      href: "/user/partially_ripe",
      current: page === "PARTIALLY RIPE" ? true : false,
    },
    {
      icon: IconDashboard,
      name: "Ripe",
      color: "#000000",
      href: "/user/ripe",
      current: page === "RIPE" ? true : false,
    },
    {
      icon: IconDashboard,
      name: "Over Ripe",
      color: "#000000",
      href: "/user/overripe",
      current: page === "OVER RIPE" ? true : false,
    },
  ];

  return (
    <div className="fixed top-0 z-40 w-72 h-screen pt-24 px-10 bg-white">
      <div className="flex flex-col space-y-8">
        {/* Features */}
        <div className="flex flex-col space-y-2">
          <p className="font-semibold text-lg">FEATURES</p>

          {features.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? "opacity-100" : "hover:opacity-100 opacity-50",
                "ease-linear transition-all duration-150 font-semibold text-lg"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <object data={item.icon} className="inline-flex w-6 mr-4">
                "item-name" Image
              </object>
              {item.name}
            </a>
          ))}
        </div>

        <hr className="h-0.5 flex-grow opacity-20 border-0 bg-black" />

        {/* Storages */}
        <div className="flex flex-col space-y-2">
          <p className="font-semibold text-lg">STORAGES</p>

          {storages.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? "opacity-100" : "hover:opacity-100 opacity-50",
                "ease-linear transition-all duration-150 font-semibold text-lg"
              )}
              style={{ color: item.color }} // Add this line
              aria-current={item.current ? "page" : undefined}
            >
              <object data={item.icon} className="inline-flex w-6 mr-4">
                "item-name" Image
              </object>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
