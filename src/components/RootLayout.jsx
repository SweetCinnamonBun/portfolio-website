import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-slate-950 text-white items-center">
      <Navbar />

      <main className="flex-grow pt-20 relative z-10 max-w-[900px]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
