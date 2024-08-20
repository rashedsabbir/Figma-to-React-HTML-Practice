import Navbar from "../shared/navbar/navbar";
const Header = () => {
  return (
    <div>
      <div className="absolute flex flex-row justify-between w-full">
        <Navbar />
      </div>

      <img src="/src/assets/slider-1.jpg" alt=""></img>
    </div>
  );
};

export default Header;
