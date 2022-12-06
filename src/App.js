import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./App.css";
import CardFooter from "./components/CardFooter";
import UnitControl from "./components/UnitControl";
import UnitConverter from "./components/UnitConverter";

library.add(fab, fas, far);

function App() {
  const [inputValue, setInputvalue] = useState(0);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputvalue(value);
  };

  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter
          inputValue={inputValue}
          handleInputChange={handleInputChange}
        />
      </div>
      <CardFooter inputValue={inputValue} />
    </div>
  );
}

export default App;
//test