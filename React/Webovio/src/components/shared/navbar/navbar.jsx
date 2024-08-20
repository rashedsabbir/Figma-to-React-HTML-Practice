import React from "react";

const navbar = () => {
  return (
    <div className="navbar bg-transparent flex flex-row justify-between w-full my-8 mx-36">
      <div className="flex flex-row justify-center items-center ">
        <svg
          width="55"
          height="36"
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

        <a className="btn btn-ghost text-white font-bold text-4xl ml-2">
          webovio.
        </a>
      </div>
      <a className="cursor-pointer">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#F5F6F7" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11 14V15.8H29V14H11ZM11 19.4V21.2H29V19.4H11ZM11 26.6V24.8H29V26.6H11Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  );
};

export default navbar;
