import axios, { Axios } from "axios";


// call API from BE
export default async function getArea() {
  const urlAPI = process.env.API_URL + "/api/v1/area";
  try {
    const response = await axios.get(urlAPI);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
