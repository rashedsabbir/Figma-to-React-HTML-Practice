import Navbar from "../shared/navbar/navbar";

const Header = () => {
  return (
    <div className="relative">
      <div class=" nav-pic bg-cover h-screen">
        <div className=" flex flex-row justify-between w-full py-8 px-40">
          <Navbar />
        </div>
        <div className=" px-40 text-white">
          <h6 className="text-sm pt-16 pb-10">A place where </h6>
          <h1 className="font-semibold pb-10">
            A creative agency <br /> for redemptive <br /> brands
          </h1>
          <h6 className="text-sm pb-8">
            Anteelo is a leading strategic design firm that builds powerful
            digital <br /> solutions for startups and enterprises.
          </h6>
          <h6 className="">
            <a className="flex flex-row gap-1 items-center border-b-2 w-28 border-yellow-500  text-sm font-bold text-yellow-500 hover:text-yellow-500 cursor-pointer">
              <svg
                fill="#eab308"
                width="10px"
                height="10px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z" />
              </svg>
              Get in touch
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Header;
