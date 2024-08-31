import Header from "./components/Header/Header";
import "./App.css";
import img from "./assets/slider-3.jpg";
import Ceo from "./components/Ceo/Ceo";
import Projects from "./components/Projects/Projects";
import Model from "./components/Model/Model";
import Bookings from "./components/Bookings/Bookings";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="">
      <div>
        <Header />
        <img
          src={img}
          alt="Small Overlay"
          className="absolute bottom-[-2] right-0 transform -translate-y-1/4 h-36 w-10/12 shadow-2xl"
        />
        <Ceo />
        <Projects />
        <Model />
        <Bookings />
        <Pricing />
      </div>
    </div>
  );
}

export default App;
