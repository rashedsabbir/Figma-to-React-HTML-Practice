import React from "react";
import img from "../../assets/slider-7.png";
const Model = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-8 justify-between">
        <div className="flex flex-col pl-40">
          <h1 className="font-bold pb-8 pt-20 text-3xl text-slate-600">
            Is this the future of
            <br />
            3D model?
          </h1>
          <h6 className="text-sm pb-8 text-slate-500">
            While it was just a TV show, that little speech at the <br />{" "}
            beginning of the original Star Trek show really did do <br /> a good
            job of capturing our feelings about space.
            <br /> <br />
            It is those feelings that drive our love of astronomy <br /> and our
            desire to learn more and more about it.
          </h6>
          <p className="pt-10">
            <a className="flex flex-row gap-1 items-center border-b-2 w-32 border-gray-300  text-sm font-bold text-gray-300 hover:text-gray-300 cursor-pointer">
              <svg
                fill="#d1d5db"
                width="10px"
                height="10px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
              </svg>
              See Case Study
            </a>
          </p>
        </div>
        <section className=" relative overflow-hidden  ">
          <div className=" px-4 pl-10 ">
            <div className="flex flex-row-reverse">
              <div className="">
                <div className="bg-contain bg-no-repeat model-pic"></div>
              </div>

              <div className="bg-white shadow-2xl z-10 -mr-[340px] mt-[266px] h-56 w-100 p-8 rounded-lg mb-16">
                <p class=" text-[14px] italic  text-stone-600 pb-6">
                  “I know they are going to be honest with me. I <br /> am not
                  going to get a subpar product; I know it
                  <br /> is going to be good. That is the number one <br />{" "}
                  advantage of working with Exhibit Systems.”
                </p>
                <div className="flex flex-row gap-4">
                  <img
                    src={img}
                    className="w-14 h-14 rounded-full shadow-2xl"
                    alt=""
                    srcset=""
                  />
                  <div className="flex flex-col pt-2 gap-1">
                    <p className="font-bold text-sm text-slate-600">
                      Lina Hart
                    </p>
                    <p class="text-gray-800 text-xs">Founder & CEO, Gicc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Model;
