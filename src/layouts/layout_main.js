import { Outlet } from "react-router-dom";

// ~ ~ ~ ~ ~ Components ~ ~ ~ ~ ~ //
import NavbarMain from "../components/navbars/navbar_main.js";
import Footer from "../components/footers/footer_main.js";

export default function LayoutMain() {
  return (
    <>
      <NavbarMain />
      <Outlet />
      <Footer />
    </>
  );
}
