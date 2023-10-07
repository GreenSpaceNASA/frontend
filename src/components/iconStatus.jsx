import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";
import { faBiohazard } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faHouseTsunami } from "@fortawesome/free-solid-svg-icons";
import { faPersonSwimming } from "@fortawesome/free-solid-svg-icons";
import { faPersonDrowning } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const iconMap = {
  radiation: faRadiation,
  chemistry: faBiohazard,
  alert: faTriangleExclamation,
  tsunami: faHouseTsunami,
  swim: faPersonSwimming,
  drown: faPersonDrowning,
};

export default function DisplayIconStatus() {
  const [fontIcon, setIconState] = useState();
  useEffect(() => {
    const response = "radiation"; //api endpoint
    setIconState(iconMap[response]);
  }, []);

  return (
    <>
      <div>
        <img src="/51797.gif" alt="water-drop" width={2200} heigh={200} />
        <FontAwesomeIcon
          icon={fontIcon}
          beat={true}
          size="2x"
          transform="up-300 right-600"
        />
      </div>
    </>
  );
}
