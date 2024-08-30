import React from "react";
import img from "../../assets/slider-9.png";
const Bookings = () => {
  return (
    <div>
      <div className="flex flex-row">
        <section className=" relative overflow-hidden z-[1] ">
          <div className=" px-4 pr-10 ">
            <div className="flex flex-row">
              <div className="">
                <div className="bg-contain bg-no-repeat bookings-pic"></div>
              </div>

              <div className="bg-white shadow-2xl -ml-[330px] mt-[310px] h-56 w-100 p-8 rounded-lg mb-16">
                <p class=" text-[14px] italic  text-stone-600 pb-6">
                  “In my history of working with trade show <br /> vendors, I
                  can honestly say that there is not one <br /> company that
                  I've ever worked with that has <br /> better service than
                  Exhibit Systems.”
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
                      Genevieve Rodriquez
                    </p>
                    <p class="text-gray-800 text-xs">Founder & CEO, Zeem</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col px-2">
          <h1 className="font-bold pb-8 pt-20 text-3xl text-slate-600">
            Is this the future of
            <br />
            Online Booking
          </h1>
          <h6 className="text-sm pb-8 text-slate-500">
            You should be able to find several indispensable <br /> facts about
            motivation in the following paragraphs.
            <br /> <br />
            If there’s at least one fact you didn’t know before,
            <br /> imagine the difference it might make.
          </h6>
          <p className="pt-20">
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
      </div>
    </div>
  );
};

export default Bookings;
