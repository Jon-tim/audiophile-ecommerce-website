import React from "react";
import headphones from "../../../src/assets/images/shared/desktop/image-headphones.png";
import speakers from "../../../src/assets/images/shared/desktop/image-speakers.png";
import earphones from "../../../src/assets/images/shared/desktop/image-earphones.png";
import arrowRight from "../../../src/assets/icons/icon-arrow-right.svg";

function Product() {
  const products = [
    {
      id: 1,
      name: "headphones",
      imageSource: `${headphones}`,
    },
    {
      id: 2,
      name: "speakers",
      imageSource: `${speakers}`,
    },
    {
      id: 3,
      name: "earphones",
      imageSource: `${earphones}`,
    },
  ];
  return (
    <>
      <div className="flex justify-center flex-wrap  items-center gap-20 py-28 md:gap-x-4 max-w-5xl mx-auto">
        {products.map((i) => (
          <div
            key={i.id}
            className="bg-grayBg rounded-xl flex
          flex-col items-center py-8 h-48 relative flex-1 w-full"
          >
            <img
              src={i.imageSource}
              alt={`${i.name} image`}
              className="w-[50%] absolute -top-14"
            />
            <p className="uppercase font-medium text-lg tracking-wider mb-4 mt-14">
              {i.name}
            </p>
            <div className="flex items-center gap-3">
              <span className="uppercase text-blk2 font-semibold">shop</span>
              <img src={arrowRight} alt="arrow right icon" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
