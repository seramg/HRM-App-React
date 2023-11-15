import { getData } from "../core/api/functions";

export async function fetchData() {
  try {
    const response = await getData("/.json");
    const myJson = response.data;
    return myJson;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
