import Header from "./components/Header/Header";
import "./App.css";
import img from "./assets/slider-3.jpg";
import Ceo from "./components/Ceo/Ceo";

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
      </div>
    </div>
  );
}

export default App;
