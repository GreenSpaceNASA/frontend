import { faBiohazard } from "@fortawesome/free-solid-svg-icons";

export default function DisplayAnimals({ animalsList}) {
  const animalListJSX = animalsList.map((item) => {
    return (
        <div key={item.name}>
          {item.name} <br />
          {item.in_danger} <br />
          {item.description}
        </div>
    );
  });

  return (
    <div>
        {animalListJSX}
    </div>
  );
}
