import { getData } from "../core/api/functions";

export async function fetchData() {
  try {
    const databaseUrl = import.meta.env.VITE_DATABASE_URL;
    const response = await getData(databaseUrl + "/.json");

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    const myJson = response.data;
    return myJson;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
