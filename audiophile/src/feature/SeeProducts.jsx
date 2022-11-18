import React from "react";
import circles from "../assets/icons/pattern-circles.svg";
import lgZx7 from "../../src/assets/images/home/desktop/image-speaker-zx7.jpg";
import lgZx9 from "../../src/assets/images/home/desktop/image-speaker-zx9.png";
import lgYx1 from "../../src/assets/images/home/desktop/image-earphones-yx1.jpg";
import mdZx7 from "../../src/assets/images/home/tablet/image-speaker-zx7.jpg";
import mdZx9 from "../../src/assets/images/home/tablet/image-speaker-zx9.png";
import mdYx1 from "../../src/assets/images/home/tablet/image-earphones-yx1.jpg";
import smZx7 from "../../src/assets/images/home/mobile/image-speaker-zx7.jpg";
import smZx9 from "../../src/assets/images/home/mobile/image-speaker-zx9.png";
import smYx1 from "../../src/assets/images/home/mobile/image-earphones-yx1.jpg";

import SecondaryBtn from "../utils/SecondaryBtn";
import TertiaryBtn from "../utils/TertiaryBtn";

function SeeProducts() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_350px_220px_220px] gap-8 md:grid-rows-[auto_220px_220px]">
        <div className="speaker-one bg-orangeText rounded-xl flex flex-col items-center gap-10 py-16 relative md:col-span-2 overflow-hidden">
          <img src={circles} className="absolute w-[500px] -top-[30%]" alt="" />
          <img src={smZx9} className="w-1/2 relative" alt="" />
          <div className="image-details flex flex-col items-center gap-7">
            <h1 className="text-5xl uppercase text-white font-medium text-center">
              zx9 <br /> speaker
            </h1>
            <p className="text-white/80 text-center">
              Upgrade to premium speakers that are phenomentally built to
              deliver truly remarkable sound.
            </p>
            <TertiaryBtn>see product</TertiaryBtn>
          </div>
        </div>
        <div className="bg-[url('../src/assets/images/home/mobile/image-speaker-zx7.jpg')] md:bg-[url('../src/assets/images/home/tablet/image-speaker-zx7.jpg')] lg:bg-[url('../src/assets/images/home/desktop/image-speaker-zx7.jpg')] bg-center bg-no-repeat bg-cover rounded-xl px-8 py-10 flex flex-col items-start justify-center md:col-span-2 ">
          <h1 className="uppercase font-medium text-blk4 text-4xl mb-8">
            zx7 speaker
          </h1>
          <SecondaryBtn>see product</SecondaryBtn>
        </div>
        <div className="earphones-image bg-[url('../src/assets/images/home/mobile/image-earphones-yx1.jpg')] md:bg-[url('../src/assets/images/home/tablet/image-earphones-yx1.jpg')] lg:bg-[url('../src/assets/images/home/desktop/image-earphones-yx1.jpg')] bg-no-repeat bg-center bg-cover rounded-xl md:col-span-1"></div>
        <div className="earphones-details bg-grayBg rounded-xl px-8 flex flex-col items-start justify-center md:col-span-1">
          <h1 className="uppercase font-medium text-blk4 text-4xl mb-8">
            yx1 earphones
          </h1>
          <SecondaryBtn>see product</SecondaryBtn>
        </div>
      </div>
    </>
  );
}

export default SeeProducts;
