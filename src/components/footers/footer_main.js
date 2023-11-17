import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FooterDefault() {
  const [page, setPage] = useState();
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPage("SIGN IN");
        break;
      case "/about":
        setPage("ABOUT");
        break;
      case "/solutions":
        setPage("SOLUTIONS");
        break;
      case "/contact_us":
        setPage("CONTACT US");
        break;
      case "/sign_up":
        setPage("SIGN UP");
        break;
      case "/forgot_password":
        setPage("FORGOT PASSWORD");
        break;

      default:
        break;
    }
  }, [location.pathname]);

  return page === "SIGN IN" ? (
    <footer className="fixed bottom-0 z-30 w-full">
      <div className="flex h-16 bg-transparent px-2 sm:px-10 items-center justify-end">
        <p className="text-base font-semibold">
          Copyright © 2023{" "}
          <a href="/" className="text-md">
            SmartMango
          </a>
        </p>
      </div>
    </footer>
  ) : page === "ABOUT" ? (
    <footer className="fixed bottom-0 z-30 w-full">
      <div className="flex h-16 px-2 sm:px-10 items-center justify-end bg-lime-300">
        <p className="text-base font-semibold">
          Copyright © 2023{" "}
          <a href="/" className="text-md">
            SmartMango
          </a>
        </p>
      </div>
    </footer>
  ) : page === "SOLUTIONS" ? (
    <footer className="fixed bottom-0 z-30 w-full">
      <div className="flex h-16 px-2 sm:px-10 items-center justify-end bg-lime-700">
        <p className="text-base font-semibold text-white">
          Copyright © 2023{" "}
          <a href="/" className="text-md">
            SmartMango
          </a>
        </p>
      </div>
    </footer>
  ) : page === "CONTACT US" ? (
    <footer className="fixed bottom-0 z-30 w-full">
      <div className="flex h-16 px-2 sm:px-10 items-center justify-end bg-yellow-600">
        <p className="text-base font-semibold text-white">
          Copyright © 2023{" "}
          <a href="/" className="text-md">
            SmartMango
          </a>
        </p>
      </div>
    </footer>
  ) : (
    <footer className="fixed bottom-0 z-30 w-full">
      <div className="flex h-16 px-2 sm:px-10 items-center justify-end bg-transparent">
        <p className="text-base font-semibold">
          Copyright © 2023{" "}
          <a href="/" className="text-md">
            SmartMango
          </a>
        </p>
      </div>
    </footer>
  );
}
