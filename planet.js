`use strict`;
/* Planet Size Compare Kısmı */

function comparePlanets() {
  const planet1 = document.getElementById("planet1").value;
  const planet2 = document.getElementById("planet2").value;

  const planetsSizes = {
    Earth: 12742,
    Mars: 6779,
    Jupiter: 13982,
    Venus: 12104,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    planetsSizes.hasOwnProperty(planet1) &&
    planetsSizes.hasOwnProperty(planet2)
  ) {
    const size1 = planetsSizes[planet1];
    const size2 = planetsSizes[planet2];

    const ratio = size2 / size1;

    let resultMessage = "";

    if (ratio > 1) {
      resultMessage = `${planet2}'s size is ${ratio.toFixed(
        1
      )} times bigger than ${planet1}'s size.`;
    } else if (ratio < 1) {
      resultMessage = `${planet1}'s size is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${planet2}'s size.`;
    } else {
      resultMessage = `${planet1} and ${planet2} have the same size.`;
    }
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid planets for comparison.";
  }
}

function compareMass() {
  const planet1 = document.getElementById("planet1").value;
  const planet2 = document.getElementById("planet2").value;

  const planetsMass = {
    Earth: 5972e24,
    Mars: 639e23,
    Jupiter: 1898e27,
    Venus: 4867e24,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    planetsMass.hasOwnProperty(planet1) &&
    planetsMass.hasOwnProperty(planet2)
  ) {
    const mass1 = planetsMass[planet1];
    const mass2 = planetsMass[planet2];

    const ratio = mass2 / mass1;

    let resultMessage = "";

    if (ratio > 1) {
      resultMessage = `${planet2}'s mass is ${ratio.toFixed(
        1
      )} times bigger than ${planet1}'s mass.`;
    } else if (ratio < 1) {
      resultMessage = `${planet1}'s mass is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${planet2}'s mass.`;
    } else {
      resultMessage = `${planet1} and ${planet2} have the same mass.`;
    }
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid planets for comparison.";
  }
}

function compareVolume() {
  const planet1 = document.getElementById("planet1").value;
  const planet2 = document.getElementById("planet2").value;

  const planetsVolume = {
    Earth: 108321e12,
    Mars: 163118e11,
    Jupiter: 14313e15,
    Venus: 92843e11,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    planetsVolume.hasOwnProperty(planet1) &&
    planetsVolume.hasOwnProperty(planet2)
  ) {
    const volume1 = planetsVolume[planet1];
    const volume2 = planetsVolume[planet2];

    const ratio = volume2 / volume1;

    let resultMessage = "";

    if (ratio > 1) {
      resultMessage = `${planet2}'s volume is ${ratio.toFixed(
        1
      )} times bigger than ${planet1}'s volume.`;
    } else if (ratio < 1) {
      resultMessage = `${planet1}'s volume is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${planet2}'s volume.`;
    } else {
      resultMessage = `${planet1} and ${planet2} have the same volume.`;
    }
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid planets for comparison.";
  }
}

function howFast() {
  const planet1 = document.getElementById("planet1").value;
  const planet2 = document.getElementById("planet2").value;

  const travelTimes = {
    Earth: "Already there!",
    Mars: "6-9 months (Chemical Rockets)",
    Jupiter: "2-3 years (Chemical Rockets)",
    Venus: "4-6 months (Chemical Rockets)",
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    travelTimes.hasOwnProperty(planet1) &&
    travelTimes.hasOwnProperty(planet2)
  ) {
    let resultMessage = `<br>Travel time to ${planet2}: ${travelTimes[planet2]}`;

    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid planets for comparison.";
  }
}
