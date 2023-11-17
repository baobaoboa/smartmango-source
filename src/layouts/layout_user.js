import { Outlet } from "react-router-dom";

// ~ ~ ~ ~ ~ Components ~ ~ ~ ~ ~ //
import NavbarUser from "../components/navbars/navbar_user.js";
import SidebarUser from "../components/sidebars/sidebar_user.js";
import Footer from "../components/footers/footer_main.js";

export default function LayoutUser() {
  return (
    <>
      <NavbarUser />
      <SidebarUser />
      <Outlet />
      <Footer />
    </>
  );
}
