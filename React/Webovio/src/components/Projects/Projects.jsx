import React from "react";

const SubscribeForm = () => (
  <form className="mt-6">
    <div className="relative flex flex-wrap items-stretch w-full shadow-2xl rounded-tl rounded-bl overflow-hidden">
      <input
        name="email"
        id="ezy__comingsoon7-register-email"
        className="grow py-4 px-5 placeholder:text-lg"
        type="email"
        placeholder="Enter email"
        required
      />
      <button className="bg-blue-600 hover:bg-opacity-90 text-white border border-blue-600 py-3 rounded-r rounded-b transition font-medium text-lg px-12">
        Send
      </button>
    </div>
  </form>
);

const ComingSoon7 = () => {
  return (
    <section className="ezy__comingsoon7 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-[1] text-[#04004d]">
      <div className="container px-4 flex">
        <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="bg-cover bg-no-repeat bg-center -z-[1] hidden w-[60vw] float-right lg:block h-full"
              style={{
                backgroundImage:
                  "url(https://cdn.easyfrontend.com/pictures/comingsoon/coming7.jpg)",
              }}
            ></div>
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
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-10   lg:col-span-8">
                  <SubscribeForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
