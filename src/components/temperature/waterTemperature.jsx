

export default function DisplayWaterTemperature({tempCelcius}) {
  return (
    <div className="bg-amber-100 rounded-lg box-content h-60 w-[500px] ml-20 mr-20 mb-10">
      <span>Current temperature of water <strong>{tempCelcius}</strong></span>.
      <div className="w-60 float-right hover:rounded-2xl">
        <img src="/cold-water.svg" alt="watertemperature" />
      </div>
    </div>
  );
}
