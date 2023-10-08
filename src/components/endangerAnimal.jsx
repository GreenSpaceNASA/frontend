import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faShrimp } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function DisplayAnimals({ animalsList}) {

  const animalListJSX = animalsList.map((item) => {
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
    return (
        <li key={item.name} className="font-bold py-4">
          <button onClick={toggle}>
          { item.in_danger &&(<span>
          <FontAwesomeIcon icon={faShield} className="text-2xl text-sky-300"/>
          </span>)}{item.name} <br />
          </button>
          <div className="font-normal text-xl py-4 px-6" style={{
        display: showMe?"block":"none"
      }}>
        {item.description}
      </div>
        </li>
    );
  });

  return (
    <div className="text-xl text-sky-200 w-auto m-auto mt-10 mb-20 text-center">
      <div className="inline-flex items-center justify-center w-full opacity-20">
    <hr className="w-64 h-1 my-8 bg-blue-900 border-0 rounded"/>
    <div className="absolute px-4 -translate-x-1/2 left-1/2">
          {/* <FontAwesomeIcon icon={faShrimp} className="text-2xl text-blue-900"/> */}
          <FontAwesomeIcon icon={faFish} className="text-2xl text-blue-900"/>
    </div>
    </div>
      <ul className="">
        {animalListJSX}
      </ul>
    </div>
  );
}
