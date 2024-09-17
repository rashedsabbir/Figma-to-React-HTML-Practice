import React from "react";
import img from "../assets/image-1.jpg";
const header = () => {
  return (
    <div className="border-[1px] border-white rounded-3xl bg-black">
      <div class="relative flex justify-center w-[1000px] h-[700px] border border-8 border-black rounded-3xl ">
        <div class="absolute pl-1 border border-8  border-black h-full w-full rounded-2xl">
          <img src={img} className="flex justify-center" alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default header;
