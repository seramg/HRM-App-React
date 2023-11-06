export async function getData() {
  try {
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
