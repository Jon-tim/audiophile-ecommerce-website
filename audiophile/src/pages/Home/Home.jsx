import React from "react";
import Navbar from "../../feature/Navbar/Navbar";
import button from "../../utils/button";
export const Home = () => {
  return (
    <>
      <header
        className="bg-[url('../src/assets/images/home/mobile/image-header.jpg')] 
      md:bg-[url('../src/assets/images/home/tablet/image-header.jpg')] lg:bg-[url('../src/assets/images/home/desktop/image-hero.jpg')] bg-no-repeat
       bg-center h-screen bg-cover"
      >
        <Navbar />
        <div className="hero max-w-5xl mx-auto">
          <div className="hero-details my-auto h-max">
            <p className="text-blk3 uppercase text-xs tracking-[1.25em] mb-4">
              new product
            </p>
            <h1 className="text-white uppercase text-7xl mb-4">
              xx99 mark ii <br /> headphones
            </h1>
            <p className="text-blk1 max-w-[26rem] mb-8">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="uppercase text-white bg-orangeText px-7 py-3 font-medium">
              see product
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
