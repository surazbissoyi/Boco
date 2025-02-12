import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative lg:mt-2" ref={menuRef}>
      <div className="flex justify-between items-center p-4 container mx-auto">
        {/* Mobile Menu Button - moved to left */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <RiCloseLine /> : <RiMenu2Line />}
        </button>

        {/* Logo - centered on mobile */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <h2 className="text-4xl font-semibold cursor-pointer">boco</h2>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 border border-purple-300 px-1 py-[5px] rounded-full">
          <Link
            to="/shopify"
            className={`font-semibold text-md py-2 px-5 ${
              location.pathname === "/shopify" ? "bg-purple-100 rounded-full" : ""
            }`}
          >
            Shopify Store Build
          </Link>
          <Link
            to="/landing"
            className={`font-semibold text-md py-2 px-5 ${
              location.pathname === "/landing" ? "bg-purple-100 rounded-full" : ""
            }`}
          >
            Landing Page Design
          </Link>
          <Link
            to="/case"
            className={`font-semibold text-md py-2 px-5 ${
              location.pathname === "/case" ? "bg-purple-100 rounded-full" : ""
            }`}
          >
            Case Studies
          </Link>
        </div>

        {/* Talk to Us Button */}
        <div className="flex items-center">
          {/* Desktop version */}
          <div className="hidden md:flex border rounded-full bg-[#140055] text-white items-center gap-2">
            <button className="pl-8 pr-3 py-[14px] font-semibold text-md">
              Talk to Us
            </button>
            <div className="bg-white rounded-full text-black p-3 mr-1">
              <MdArrowOutward className="text-[17px]" />
            </div>
          </div>
          {/* Mobile version - only arrow */}
          <div className="md:hidden bg-[#140055] rounded-full text-white p-3">
            <MdArrowOutward className="text-[17px]" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white py-4 px-4 z-50 border-b border-purple-300">
          <div className="flex flex-col gap-4">
            <Link 
              to="/shopify" 
              className="text-md border-b pb-2 font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Shopify Store Build
            </Link>
            <Link 
              to="/landing" 
              className="text-md border-b pb-2 font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Landing Page Design
            </Link>
            <Link 
              to="/case" 
              className="text-md font-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
