import axios from "axios";
import { data } from "autoprefixer";


export default async function getAnimal() {
  const animalUrlAPI = process.env.API_URL + "/api/v1/animals";
  try {
    const res = await axios.getAnimal(animalUrlAPI);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
