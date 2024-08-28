import React from "react";
import img from "../../assets/slider-6.png";
const Projects = () => {
  return (
    <div>
      <div className=" px-40">
        <div className="border-b-2 border-gray-100 mb-24 flex items-center justify-center w-[840px]"></div>
        <div className="flex flex-row gap-24 mb-12">
          <h1 className="font-bold pb-8 text-3xl text-stone-600">
            We Have Some
            <br />
            Awesome Projects.
          </h1>
          <h6 className="text-sm pb-8 text-slate-500">
            There’s no secret sauce, no wizard behind the curtain.
            <br />
            makes Aerolab tick is an interdisciplinary team with
            <br />
            framework that fosters candid collaboration.
          </h6>
        </div>
      </div>
      <div className="flex flex-row ">
        <section className=" relative overflow-hidden z-[1] ">
          <div className=" px-4 pr-10 ">
            <div className="flex flex-row">
              <div className="">
                <div className="bg-contain bg-no-repeat    project-pic"></div>
              </div>

              <div className="bg-white shadow-2xl -ml-[330px] mt-[300px] h-56 w-100 p-8 rounded-lg">
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
                    <p class="text-gray-800 text-xs">Founder & CEO, Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col px-2">
          <h1 className="font-bold pb-8 pt-20 text-3xl text-slate-600">
            The wall new
            <br />
            Balenciaga.com
          </h1>
          <h6 className="text-sm pb-8 text-slate-500">
            This article is floated online with an aim to help you <br />
            find the best dvd printing solution.
            <br /> <br />
            Dvd printing is an important feature used by large <br /> and small
            DVD production houses to print <br /> information on DVDs.
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
      </div>
    </div>
  );
};

export default Projects;
