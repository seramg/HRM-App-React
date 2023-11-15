import { getData } from "../core/api/functions";

export async function fetchData() {
  try {
    let res;
    const databaseUrl = import.meta.env.VITE_DATABASE_URL;
    res = await getData<string>(databaseUrl + "employees.json");
    console.log(res);
    const response = await fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const myJson = await response.json();
    return myJson;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
