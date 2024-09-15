import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="relative flex justify-center w-[1250px] h-[700px] border border-8 border-black rounded-2xl">
        <div class="absolute border border-4  border-black h-full w-full"></div>
        <span class="border border-black bg-black w-3 h-3 mt-2 rounded-full"></span>
        <span class="absolute -right-2.5 top-20 border border-2 border-black h-10 rounded-md"></span>
      </div>
    </>
  );
}

export default App;
