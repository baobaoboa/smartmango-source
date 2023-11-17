import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

// ~ ~ ~ ~ ~ Layouts ~ ~ ~ ~ ~ //
import LayoutMain from "./layouts/layout_main";
import LayoutUser from "./layouts/layout_user";

// ~ ~ ~ ~ ~ Main ~ ~ ~ ~ ~ //
import About from "./pages/about";
import Solutions from "./pages/solutions";
import ContactUs from "./pages/contact_us";

// ~ ~ ~ ~ ~ Auth ~ ~ ~ ~ ~ //
import SignIn from "./pages/auth/sign_in";
import SignUp from "./pages/auth/sign_up";
import ForgotPassword from "./pages/auth/forgot_password";

// ~ ~ ~ ~ ~ User ~ ~ ~ ~ ~ //
// Features //
import UserDashboard from "./pages/user/features/dashboard"
import UserScanMango from "./pages/user/features/scan_mango"
import UserAccount from "./pages/user/features/account"
import UserScanMangoOLD from "./pages/user/scan_mango"
import UserScanMangoOLDCopy from "./pages/user/scan_mango_copy"

// Storages //
import UserUnripe from "./pages/user/storages/unripe"
import UserEarlyRipe from "./pages/user/storages/early_ripe"
import UserPartiallyRipe from "./pages/user/storages/partially_ripe"
import UserRipe from "./pages/user/storages/ripe"
import UserOverRipe from "./pages/user/storages/over_ripe"

// ~ ~ ~ ~ ~ Admin ~ ~ ~ ~ ~ //

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ index.js ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ //
const root = ReactDOM.createRoot(document.getElementById("root"));
export default function SmartMango() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          {/* Auth */}
          <Route index element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          
          {/* Main */}
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Route>
        <Route path="/user/" element={<LayoutUser />}>
          {/* Features */}
          <Route index element={<UserDashboard />} />
          <Route path="/user/scan_mango" element={<UserScanMango />} />
          <Route path="/user/account" element={<UserAccount />} />
          <Route path="/user/scan_mango_old" element={<UserScanMangoOLD />} />
          <Route path="/user/scan_mango_old_copy" element={<UserScanMangoOLDCopy />} />

          {/* Storages */}
          <Route path="/user/unripe" element={<UserUnripe />} />
          <Route path="/user/early_ripe" element={<UserEarlyRipe />} />
          <Route path="/user/partially_ripe" element={<UserPartiallyRipe />} />
          <Route path="/user/ripe" element={<UserRipe />} />
          <Route path="/user/overripe" element={<UserOverRipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(
  <React.StrictMode>
    <SmartMango />
  </React.StrictMode>
);
