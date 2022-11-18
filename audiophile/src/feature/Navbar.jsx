import React from "react";
// import Navlist from "../../components/Navlist/Navlist";
import logo from "../../src/assets/icons/logo.svg";
import cartIcon from "../../src/assets/icons/icon-cart.svg";
import hamburger from "../../src/assets/icons/icon-hamburger.svg";
import list from "../data/data";
function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto py-8 px-8 h-[10%] lg:h-[15%] border-b lg:px-0 border-blk3">
      <img src={hamburger} alt="hamburger menu icon" className="md:hidden" />
      <img src={logo} alt="logo" className="cursor-pointer" />
      <div className="hidden items-center gap-10 text-sm md:flex">
        {/* <Navlist/> */}
        {list.map((i) => (
          <a
            key={i}
            className="text-white uppercase cursor-pointer hover:text-orangeText transition"
          >
            {i}
          </a>
        ))}
      </div>
      <img src={cartIcon} alt="cart icon" />
    </nav>
  );
}

export default Navbar;
