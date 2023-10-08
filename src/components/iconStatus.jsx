import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faRadiation } from "@fortawesome/free-solid-svg-icons";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faHouseTsunami } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faPersonDrowning } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { faLadderWater } from "@fortawesome/free-solid-svg-icons";


const iconMap = {
  good: faLadderWater,
  moderate: faPersonSwimming,
  contaminated: faBiohazard,
  unknown: faTriangleExclamation,
  radiation: faRadiation,
  danger: faPersonDrowning,
  protected: faHouseTsunami,
};

export default function DisplayIconStatus({location, waterStt}) {
  // const [fontIcon, setIconState] = useState();
  // useEffect(() => {
  //   const response = {waterStt}; //api endpoint
  //   setIconState(iconMap[response]);
  // }, []);

  return (
    <>
      <div className="w-auto m-auto mt-20 text-center">
        <div className="w-96 mr-auto ml-auto block">
          <FontAwesomeIcon
          icon={faDroplet}
          bounce={true}
          size="8x"
            className="opacity-50"
        />
        </div>
        
        <h1 className="text-6xl pt-8 font-bold">
          {location}
          <FontAwesomeIcon
          icon={iconMap[waterStt]}
          // beat={true}
            className="opacity-75 absolute top-56 right-1/4 text-4xl"
        />
        </h1>
      </div>
    </>
  );
}
