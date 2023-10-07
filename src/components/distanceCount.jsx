

const distance = "5";
export default function CountDistance() {
  return (
    <div>
      <div className="bg-sky-200 rounded-lg box-content h-48 w-auto ml-10 mr-10 mb-10">
        <p className="text-7xl hover:text-8xl text-center">
          You are {distance} km from the sea!
        </p>
      </div>
    </div>
  );
}
