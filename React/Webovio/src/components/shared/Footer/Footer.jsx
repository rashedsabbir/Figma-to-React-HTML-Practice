import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="absolute left-0 transform -translate-y-1/2 h-56 w-5/6 shadow-2xl bg-zinc-50 px-36 flex py-8 flex-col">
        <h1 className="text-[40px] font-bold text-stone-600 pb-8">
          Let’s make something <br /> amazing together.
        </h1>
        <h6 className="">
          <a className="flex flex-row gap-1 items-center border-b-2 w-36 border-gray-300  text-sm font-bold text-gray-300 hover:text-gray-300 cursor-pointer">
            <svg
              fill="#d1d5db"
              width="10px"
              height="10px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
            </svg>
            LET'S GET STARTED
          </a>
        </h6>
      </div>
      <div className=" py-6 pt-48 space-y-12 bg-stone-700 text-white px-36">
        <div className="flex flex-row gap-28 ">
          <div>
            <p className="text-sm text-stone-400">POHNE</p>

            <ul className="mt-8 space-y-4 ">
              <li>
                <a
                  href="#"
                  className=" text-white transition hover:opacity-75 text-sm font-bold"
                >
                  {" "}
                  +32 50 31 28 32{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-stone-400">ADDRESS</p>

            <ul className="mt-8 space-y-4 ">
              <li>
                <a
                  href="#"
                  className=" text-white transition hover:opacity-75 text-sm font-bold"
                >
                  {" "}
                  491 Merlin Crest Suite 963{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between border-y py-16 border-stone-600 border-slim">
          <div className="grid grid-cols-1 gap-20 pr-16 sm:grid-cols-2 border-r border-stone-600 border-slim lg:grid-cols-3">
            <div>
              <p className="font-medium text-white">SERVICES</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Strategy Design{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Product Design{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Content Strategy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Brand Strategy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">HELP AND ADVICE</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    How it works{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Contact Support{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    FAQ{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">COMPANY</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Contact{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-stone-400 transition hover:opacity-75"
                  >
                    {" "}
                    Jobs{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <p className="font-medium text-white">GET IN TOUCH</p>

            <p className="mt-8 max-w-xs text-stone-400">
              Feel free to get in touch with us <br /> via email
            </p>
            <p className="mt-6 text-lg font-extrabold text-white">
              info.webovio@gmail.com
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-stone-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="size-6"
                    fill="#57534e"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-stone-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <svg
                    className="size-6"
                    fill="#57534e"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-stone-400 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <svg
                    className="size-6"
                    fill="#57534e"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row justify-center items-center ">
            <svg
              width="32"
              height="32"
              viewBox="0 0 55 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.6502 30.4842C35.35 32.6512 32.2094 32.6511 30.9092 30.4842L12.7815 0.271275L48.8656 0.271275C51.4676 0.271275 53.0748 3.10989 51.7361 5.34111L36.6502 30.4842Z"
                fill="#FFD723"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.1277 30.4842C19.4279 32.6512 22.5685 32.6511 23.8687 30.4842L41.9964 0.271275L5.91239 0.271275C3.31037 0.271275 1.70317 3.10989 3.0419 5.34111L18.1277 30.4842Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.7815 0.27124H41.9964L27.39 24.617L12.7815 0.27124Z"
                fill="#F6F6F6"
              />
            </svg>

            <a className="btn btn-ghost text-white font-bold text-2xl ml-2">
              webovio.
            </a>
          </div>
          <p className="text-xs text-gray-500">
            &copy; 2020. Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
