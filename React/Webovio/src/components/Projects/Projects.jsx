import React from "react";
import img from "../../assets/slider-4.png";
const Projects = () => {
  return (
    <div>
      <div className="pb-12 px-40">
        <div className="border-b-2 border-gray-100 mb-24 flex items-center justify-center w-[840px]"></div>
        <div className="flex flex-row gap-24 mb-12">
          <h1 className="font-bold pb-8 text-3xl">
            We Have Some
            <br />
            Awesome Projects.
          </h1>
          <h6 className="text-sm pb-8 text-slate-800">
            There’s no secret sauce, no wizard behind the curtain.
            <br />
            makes Aerolab tick is an interdisciplinary team with
            <br />
            framework that fosters candid collaboration.
          </h6>
        </div>
      </div>
      <section className="ezy__comingsoon7 light bg-white  text-zinc-900 dark:text-white relative overflow-hidden z-[1] text-[#04004d]">
        <div className="container px-4 flex">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-contain bg-no-repeat  -z-[1] hidden w-full float-right lg:block h-full project-pic"></div>
            </div>
            <div className=" flex items-center">
              <div className="bg-white shadow-2xl -ml-[350px] -mb-[200px] p-8 rounded-lg">
                <p class=" text-[12px] italic  text-stone-600 pb-6">
                  "With More than 10 Years of Knowledge and Expertise we Design
                  and Code Websites and Apps, We Build Brands and Help Them
                  Succeed."
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
        </div>
      </section>
    </div>
  );
};

export default Projects;
