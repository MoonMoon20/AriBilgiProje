function travelTime() {
  const timeFrame = document.getElementById("timeFrame").value;

  // Distances Voyager 1 will be from Earth in light years at future times
  const distances = {
    "10,000 Years": 5.4, // Distance Voyager 1 will be in 10,000 years
    "100,000 Years": 56, // Distance Voyager 1 will be in 100,000 years
    "1 Million Years": 180, // Distance Voyager 1 will be in 1 million years
    "10 Million Years": 18500, // Distance Voyager 1 will be in 10 million years
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (distances.hasOwnProperty(timeFrame)) {
    const distance = distances[timeFrame];
    resultElement.innerHTML = `In ${timeFrame}, Voyager 1 will be approximately ${distance.toLocaleString()} light years away from Earth.`;
  } else {
    resultElement.innerHTML = "Please select a valid time frame.";
  }
}
