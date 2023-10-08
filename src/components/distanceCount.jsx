

export default function CountDistance({aquaticArea, distance, currentLocation}) {
  return (
    <div>
      <div className="bg-sky-200 rounded-lg box-content h-48 w-auto ml-10 mr-10 mb-10">
        <p className="text-6xl hover:text-7xl text-center">
          You are at <strong>{currentLocation}</strong> 
          and <strong>{distance}</strong> km away from <strong>{aquaticArea}</strong>!
        </p>
      </div>
    </div>
  );
}
