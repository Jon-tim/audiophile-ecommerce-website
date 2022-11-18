import React from "react";
import Navbar from "../../feature/Navbar";
import Btn from "../../utils/Btn";
import Product from "../../feature/Product";
import SeeProducts from "../../feature/SeeProducts";
import BestGear from "../../feature/BestGear";

export const Home = () => {
  return (
    <>
      <header
        className="bg-[url('../src/assets/images/home/mobile/image-header.jpg')] 
      md:bg-[url('../src/assets/images/home/tablet/image-header.jpg')] lg:bg-[url('../src/assets/images/home/desktop/image-hero.jpg')] bg-no-repeat bg-cover h-screen bg-bottom md:bg-center lg:bg-center w-full"
      >
        <Navbar />
        <div className="hero max-w-5xl m-auto h-[90%] w-full lg:h-[85%] flex items-center justify-center lg:justify-start">
          <div className="hero-details h-[350px] flex flex-col justify-between items-center text-center lg:text-left lg:items-start">
            <p className="text-blk2 uppercase text-base tracking-[1em]">
              new product
            </p>
            <h1 className="text-white uppercase font-medium text-5xl lg:text-6xl">
              xx99 mark ii
              <br /> headphones
            </h1>
            <p className="text-blk1 w-[23rem] leading-7 lg:max-w-[26rem]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Btn className="uppercase text-white px-7 py-3 font-medium">
              see product
            </Btn>
          </div>
        </div>
      </header>
      <div className="px-8">
        <Product />
        <SeeProducts />
        <BestGear />
      </div>
    </>
  );
};
