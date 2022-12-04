import React from "react";

function SecondaryBtn(props) {
  return (
    <>
      <button className="bg-transparent px-9 py-3 font-medium uppercase text-blk3 border-2 border-blk3 hover:bg-blk3 hover:text-white transition">
        {props.children}
      </button>
    </>
  );
}

export default SecondaryBtn;
