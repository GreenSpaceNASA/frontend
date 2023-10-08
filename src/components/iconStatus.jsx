import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";
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

export default function DisplayIconStatus({waterStt}) {
  // const [fontIcon, setIconState] = useState();
  // useEffect(() => {
  //   const response = {waterStt}; //api endpoint
  //   setIconState(iconMap[response]);
  // }, []);

  return (
    <>
      <div className="bg-lime-100 rounded-lg box-content h-80 w-auto ml-10 mr-10 mb-10">
        <div className="w-96 mr-auto ml-auto block">
          <img src="/drop-water.gif" alt="water-drop"  />
        </div>
        <div>
          <FontAwesomeIcon
          icon={iconMap[waterStt]}
          beat={true}
          size="2x"
          transform="up-100 right-500"
        />
        </div>
        
      </div>
    </>
  );
}
