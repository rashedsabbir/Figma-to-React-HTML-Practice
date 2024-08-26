import React from "react";

const Projects = () => {
  return (
    <div>
      <section className="ezy__comingsoon7 light bg-white  text-zinc-900 dark:text-white relative overflow-hidden z-[1] text-[#04004d]">
        <div className="container px-4 flex">
          <div className="grid grid-cols-12 min-h-screen">
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-cover bg-no-repeat bg-center -z-[1] hidden w-[60vw] float-right lg:block h-full project-pic"></div>
            </div>
            <div className="col-span-12 lg:col-span-5 py-12 flex items-center h-full">
              <div className="bg-slate-300 dark:bg-gray-900 bg-opacity-30 dark:bg-opacity-70 -ml-[200px] p-4 md:p-6 lg:p-12 rounded-lg">
                <h2 className="font-bold text-[32px] leading-none md:text-[45px] mb-6">
                  Coming Soon!
                </h2>
                <p className="text-lg opacity-80 mb-2">
                  An activity that requires a person's mental or physical effort
                  is work.If a person is trained for a certain type of job, they
                  may have a profession. Typically, a job would be a subset of
                  someone's career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
