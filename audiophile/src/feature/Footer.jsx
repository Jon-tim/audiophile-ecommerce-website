import React from "react";
import list from "../data/data";
import logo from "../../src/assets/icons/logo.svg";
import twitter from "../../src/assets/icons/icon-twitter.svg";
import facebook from "../../src/assets/icons/icon-facebook.svg";
import instagram from "../../src/assets/icons/icon-instagram.svg";
function Footer() {
  return (
    <div className="bg-blk4 mt-20">
      <div className=" px- py-10 flex flex-col items-center gap-10 md:items-start max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-9 md:items-start xl:flex-row xl:justify-between w-full">
          <img src={logo} alt="" />
          <div className="flex items-center flex-col gap-5 text-sm md:flex md:flex-row">
            {list.map((i) => (
              <a
                key={i}
                className="text-white uppercase cursor-pointer hover:text-orangeText font-semibold transition"
              >
                {i}
              </a>
            ))}
          </div>
        </div>
        <p className="text-blk2 text-center md:text-left font-light md:text-sm xl:w-1/2">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="w-full flex flex-col items-center gap-8 md:flex-row md:justify-between md:mt-4 md:items-end">
          <p className="text-blk2 text-center capitalize md:text-left">
            copyright 2021. all rights reserved
          </p>
          <div className="flex items-center gap-4">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
