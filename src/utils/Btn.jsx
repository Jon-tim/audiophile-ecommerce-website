import React from "react";

function Btn(props) {
  return (
    <>
      <button className="bg-orangeText px-9 py-3 transition font-medium uppercase text-white">
        {props.children}
      </button>
    </>
  );
}

export default Btn;
