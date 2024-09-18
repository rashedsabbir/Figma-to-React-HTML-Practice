import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="lg:mx-36 lg:my-24">
      <Header />
    </div>
  );
}

export default App;
