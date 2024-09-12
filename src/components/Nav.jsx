import React, { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constans";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 padding-x padding-y backdrop-blur-lg z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="text-black text-lg hover:text-slate-600"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 justify-end max-lg:hidden">
          <button className="text-lg py-2 px-3 rounded-full text-slate-900 bg-coral-red hover:bg-orange-400">
            Get Started
          </button>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="Hamburger icon"
            width={25}
            height={25}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <ul className="flex flex-col items-center gap-6 space-y-6 mt-4 bg-white py-4 max-lg:block">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="text-black text-lg hover:text-slate-600"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button className="text-lg py-2 px-3 rounded-full text-slate-900 bg-coral-red hover:bg-orange-400">
              Get Started
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Nav;
