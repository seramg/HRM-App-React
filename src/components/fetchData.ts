import { getData } from "../core/api/functions";
import { Data } from "../core/interfaces/interface";

export async function fetchData(): Promise<Data | null> {
  // updateData("/.json",res)
  try {
    const response = await getData("/.json");
    const myJson = response.data;
    return myJson;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
