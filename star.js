`use strict`;
/* ********** STAR COMPARE KISMI ********** */

function compareStars() {
  const star1 = document.getElementById("star1").value;
  const star2 = document.getElementById("star2").value;

  const starMass = {
    Sun: 1989e30,
    Betelgeuse: 3282e31,
    Vega: 4246e30,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (starMass.hasOwnProperty(star1) && starMass.hasOwnProperty(star2)) {
    const mass1 = starMass[star1];
    const mass2 = starMass[star2];

    const ratio = mass2 / mass1;

    let resultMessage = "";
    if (ratio > 1) {
      resultMessage = `${star2}'s mass is ${ratio.toFixed(
        // burda to fixed ondalıklı sayıyı azaltmak için kullanıldı
        1
      )} times bigger than ${star1}'s mass.`;
    } else if (ratio < 1) {
      // 2. star 1. stardan büyükse denildi
      resultMessage = `${star1}'s mass is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${star2}'s mass.`;
    } else {
      resultMessage = `${star1} and ${star2} have the same mass.`;
    }

    // Sonuç
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid stars for comparison.";
  }
}

function compareStarSize() {
  const star1 = document.getElementById("star1").value;
  const star2 = document.getElementById("star2").value;

  const starSize = {
    Sun: 14000000,
    Betelgeuse: 12000000000,
    Vega: 37000000,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (starSize.hasOwnProperty(star1) && starSize.hasOwnProperty(star2)) {
    const size1 = starSize[star1];
    const size2 = starSize[star2];

    const ratio = size2 / size1;

    let resultMessage = "";
    if (ratio > 1) {
      resultMessage = `${star2}'s size is ${ratio.toFixed(
        1
      )} times bigger than ${star1}'s size.`;
    } else if (ratio < 1) {
      resultMessage = `${star1}'s size is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${star2}'s size.`;
    } else {
      resultMessage = `${star1} and ${star2} have the same size.`;
    }
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid stars for comparison.";
  }
}

function compareStarVolume() {
  const star1 = document.getElementById("star1").value;
  const star2 = document.getElementById("star2").value;

  const starVolume = {
    Sun: 1412e12,
    Betelgeuse: 1567e15,
    Vega: 2954e12,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (starVolume.hasOwnProperty(star1) && starVolume.hasOwnProperty(star2)) {
    const volume1 = starVolume[star1];
    const volume2 = starVolume[star2];

    const ratio = volume2 / volume1;

    let resultMessage = "";
    if (ratio > 1) {
      resultMessage = `${star2}'s volume is ${ratio.toFixed(
        // burda to fixed ondalıklı sayıyı azaltmak için kullanıldı
        1
      )} times bigger than ${star1}'s volume.`;
    } else if (ratio < 1) {
      // 2. star 1. stardan büyükse denildi
      resultMessage = `${star1}'s volume is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${star2}'s volume.`;
    } else {
      resultMessage = `${star1} and ${star2} have the same volume.`;
    }

    // Sonuç
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid stars for comparison.";
  }
}

function howFast() {
  const star1 = document.getElementById("star1").value;
  const star2 = document.getElementById("star2").value;

  const travelTimes = {
    Sun: "6 months (Parker Solar Probe)",
    Betelgeuse: "640 years (Current Technology)",
    Vega: "25 years (Voyager Speed)",
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (travelTimes.hasOwnProperty(star1) && travelTimes.hasOwnProperty(star2)) {
    let resultMessage = `<br>Travel time to ${star2}: ${travelTimes[star2]}`;

    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid stars for comparison.";
  }
}
