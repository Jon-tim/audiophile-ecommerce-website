import React from "react";
import Navbar from "../feature/Navbar";
import Footer from "../feature/Footer";
import BestGear from "../feature/BestGear";
import Product from "../feature/Product";

function Headphones() {
  return (
    <div>
      <div className="bg-blk4">
        <Navbar></Navbar>
        <div className="w-full flex items-center justify-center py-14">
          <h1 className="uppercase text-white text-3xl font-medium">
            headphones
          </h1>
        </div>
      </div>
      <Product />
      <BestGear />
      <Footer></Footer>
    </div>
  );
}

export default Headphones;
