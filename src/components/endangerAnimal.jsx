import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faShrimp } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";

export default function DisplayAnimals({ animalsList}) {
  const animalListJSX = animalsList.map((item) => {
    return (
        <li key={item.name} className="font-bold py-4">
          { item.in_danger &&(<span>
          <FontAwesomeIcon icon={faShield} className="text-2xl text-sky-300"/>
          </span>)}{item.name} <br />
        </li>
    );
  });

  return (
    <div className="text-xl text-sky-200 w-auto m-auto mt-10 mb-20 text-center">
      <div className="inline-flex items-center justify-center w-full opacity-20">
    <hr className="w-64 h-1 my-8 bg-blue-900 border-0 rounded"/>
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 bg-transparent">
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
