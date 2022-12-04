import React from "react";
import logo from "../../src/assets/icons/logo.svg";
import cartIcon from "../../src/assets/icons/icon-cart.svg";
import hamburger from "../../src/assets/icons/icon-hamburger.svg";
import Navlist from "./Navlist";
function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto py-8 px-8 h-[10%] xl:h-[90px] border-b xl:px-0 border-blk3">
      <img src={hamburger} alt="hamburger menu icon" className="xl:hidden" />
      <img src={logo} alt="logo" className="cursor-pointer" />
      <div className="hidden items-center gap-10 text-sm xl:flex">
       <Navlist></Navlist>
      </div>
      <img src={cartIcon} alt="cart icon" />
    </nav>
  );
}

export default Navbar;
