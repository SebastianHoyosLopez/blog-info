import React from "react";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main style={{ paddingTop: "100px" }}>{children}</main>
    </div>
  );
};

export default Layout;
