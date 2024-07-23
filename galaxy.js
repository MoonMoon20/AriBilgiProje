`use strict`;
function compareGalaxySize() {
  const galaxy1 = document.getElementById("galaxy1").value;
  const galaxy2 = document.getElementById("galaxy2").value;

  const galaxySize = {
    MilkyWay: 100000,
    Andromeda: 260000,
    LMC: 163000,
    M83: 118000,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    galaxySize.hasOwnProperty(galaxy1) &&
    galaxySize.hasOwnProperty(galaxy2)
  ) {
    const size1 = galaxySize[galaxy1];
    const size2 = galaxySize[galaxy2];

    const difference = size2 - size1;

    let resultMessage = "";
    if (difference > 0) {
      resultMessage = `${galaxy2}'s size is ${difference.toLocaleString()} light years bigger than ${galaxy1}'s size.`;
    } else if (difference < 0) {
      resultMessage = `${galaxy1}'s size is ${Math.abs(
        difference
      ).toLocaleString()} light years bigger than ${galaxy2}'s size.`;
    } else {
      resultMessage = `${galaxy1} and ${galaxy2} have the same size.`;
    }

    // Result
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid galaxies for comparison.";
  }
}

function howFastGalaxy() {
  const galaxy1 = document.getElementById("galaxy1").value;
  const galaxy2 = document.getElementById("galaxy2").value;

  const travelTimes = {
    MilkyWay: 0,
    Andromeda: 260000,
    LMC: 163000,
    M83: 118000,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    travelTimes.hasOwnProperty(galaxy1) &&
    travelTimes.hasOwnProperty(galaxy2)
  ) {
    let resultMessage = `<br>Travel time to ${galaxy2}: ${travelTimes[galaxy2]} years`;

    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid galaxys for comparison.";
  }
}
