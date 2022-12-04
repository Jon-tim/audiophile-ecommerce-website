import React from "react";

function TertiaryBtn(props) {
  return (
    <>
      <button className="bg-blk4 px-9 py-3 font-medium uppercase text-white border-2 border-blk4 hover:bg-transparent hover:text-blk4 transition">
        {props.children}
      </button>
    </>
  );
}

export default TertiaryBtn;
