import React from "react";
import img from "../../assets/slider-4.png";
const Ceo = () => {
  return (
    <div className="pt-24 pb-24 px-40">
      <div className="flex flex-row justify-between text-stone-600 ">
        <div className="flex flex-col">
          <h6 className="text-sm pt-20 pb-8">What we do for you?</h6>
          <h1 className="font-bold pb-8 text-3xl">
            Strategy. Design
            <br />
            Content. Technology
            <br />
            Development
          </h1>
          <h6 className="text-sm pb-8 text-slate-500">
            There’s no secret sauce, no wizard behind the curtain. What
            <br />
            makes Aerolab tick is an interdisciplinary team with a<br />
            framework that fosters candid collaboration.
          </h6>
          <h6 className="">
            <a className="flex flex-row gap-1 items-center border-b-2 w-44 border-gray-300  text-sm font-bold text-gray-300 hover:text-gray-300 cursor-pointer">
              <svg
                fill="#d1d5db"
                width="10px"
                height="10px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
              </svg>
              More Know About Us
            </a>
          </h6>
        </div>
        <div class="service-card w-[340px] shadow-2xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group border-4 border-gray-50 mx-12">
          <p class=" text-md italic font-medium leading-loose text-stone-600 pt-12 pb-6">
            With More than 10 Years of Knowledge and Expertise we Design and
            Code Websites and Apps, We Build Brands and Help Them Succeed
          </p>
          <div className="flex flex-row gap-4">
            <img
              src={img}
              className="w-16 h-16 rounded-full shadow-2xl"
              alt=""
              srcset=""
            />
            <div className="flex flex-col pt-2 gap-1">
              <p className="font-bold text-md">Genevieve Rodriquez</p>
              <p class="text-gray-800 text-xs">Founder & CEO, Webovio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
