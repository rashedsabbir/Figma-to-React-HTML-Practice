import React from "react";
import img from "../assets/image-21.jpg";
const header = () => {
  return (
    <div className="border-[1px] border-white rounded-3xl bg-black">
      <div class="relative w-auto justify-center bg-center h-[700px] border border-8 border-black rounded-3xl ">
        {/* <img src={img} className="" alt="" srcset="" /> */}
        <div class="absolute pl-2 flex  border border-8 background-image border-black h-full w-full rounded-t-2xl"></div>
      </div>
    </div>
  );
};

export default header;
