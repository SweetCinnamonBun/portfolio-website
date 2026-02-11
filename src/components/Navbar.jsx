import React, { useState } from "react";
import { Link } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#A8DF8E]">
      <div className="max-w-6xl mx-auto  py-7 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide">
          RomanKlemiato
        </Link>
        <div className="hidden md:flex gap-8 text-lg">
          <Link to="/" className="hover:bg-violet-400 transition bg-white border-2 text-black px-4 py-1 rounded-xl">
            Home
          </Link>
          <Link to="/projects" className="hover:bg-violet-400 transition  bg-white border-2 text-black px-4 py-1 rounded-xl">
            Projects
          </Link>
          <Link to="/about" className="hover:bg-violet-400 transition bg-white border-2 text-black px-4 py-1 rounded-xl">
            About
          </Link>
          <Link to="/contact" className="hover:bg-violet-400 transition bg-white border-2 text-black px-4 py-1 rounded-xl">
            Contact
          </Link>
        </div>
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 gap-4 text-lg">
            <Link onClick={() => setOpen(false)} to="/">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} to="/projects">
              Projects
            </Link>
            <Link onClick={() => setOpen(false)} to="/about">
              About
            </Link>
            <Link onClick={() => setOpen(false)} to="/contact">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
