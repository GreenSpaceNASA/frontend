import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";


export default function DisplayWaterTemperature({tempCelcius}) {
  return (
      <div className="w-auto m-auto mt-10 text-center text-sky-800">
      <div className="font-bold text-9xl">{tempCelcius}
          <FontAwesomeIcon
          icon={faTemperatureLow}
            className="text-4xl text-sky-600"
        />
      </div>
      <div className="w-60 float-right hover:rounded-2xl">
        {/* <img src="/cold-water.svg" alt="watertemperature" /> */}
      </div>
    </div>
  );
}
