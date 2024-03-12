import React from "react";
import Sidebar from "../sidebar/sidebar";
import Dashboard from "../../pages/dashboard/Dashboard";

function Layout() {
  return (
    <div>
      <Sidebar>
        <Dashboard />
      </Sidebar>
    </div>
  );
}

export default Layout;
