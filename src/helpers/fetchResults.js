function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function randomInteger(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
export default async function fetchResults() {
  const LOADER_DURATION = randomInteger(850, 1500);

  try {
    const response = await fetch("/data.json");
    await sleep(LOADER_DURATION);

    if (!response.ok) throw new Error("Network response was not ok.");

    const data = await response.json();

    if (!data || data.length === 0) throw new Error("Fetch failed");

    return data;
  } catch (error) {
    console.error("Error occurred: ", error);
    throw error;
  }
}
