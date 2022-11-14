import React from "react";
// import Navlist from "../../components/Navlist/Navlist";
import logo from "../../../src/assets/icons/logo.svg";
import cartIcon from "../../../src/assets/icons/icon-cart.svg";
import list from "../../data/data";
function Navbar() {
  return (
    <nav className="flex items-center justify-between max-w-5xl mx-auto py-8">
      <img src={logo} alt="logo" className="cursor-pointer"/>
      <div className="flex items-center gap-10 text-sm">
        {/* <Navlist/> */}
        {list.map((i) => (
          <a key={i} className="text-white uppercase cursor-pointer hover:text-orangeText transition">{i}</a>
        ))}
      </div>
      <img src={cartIcon} alt="cart icon" />
    </nav>
  );
}

export default Navbar;
