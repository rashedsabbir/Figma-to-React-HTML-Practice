import React from "react";

const Pricing = () => {
  return (
    <div className="px-40">
      <div className="border-b-2 border-gray-100 mb-24 mt-10 flex items-center justify-center w-[840px]"></div>
      <section class="w-screen py-20">
        <h1 class="mb-12 text-center font-sans text-5xl font-bold">Our Blog</h1>
        <div class="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          <article class="group h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg">
            <div class="py-1 px-6">
              <h1 class="title-font mb-3 inline-block cursor-pointer text-xl capitali font-extrabold tracking-wide text-gray-800">
                How to get around in New York
              </h1>
              <p class="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
                maxime. Accusamus qui incidunt est rem at corrupti, earum fugiat
                iure.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
