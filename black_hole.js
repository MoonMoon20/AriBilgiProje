`use strict`;
function blackholeSize() {
  const blackhole1 = document.getElementById("blackhole1").value;
  const blackhole2 = document.getElementById("blackhole2").value;

  const blackholeSize = {
    SagittariusA: 44000000,
    M87: 40000000000,
    CygnusX1: 56000000,
    Gargantua: 100000000,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    blackholeSize.hasOwnProperty(blackhole1) &&
    blackholeSize.hasOwnProperty(blackhole2)
  ) {
    const size1 = blackholeSize[blackhole1];
    const size2 = blackholeSize[blackhole2];

    const difference = size2 - size1;

    let resultMessage = "";
    if (difference > 0) {
      resultMessage = `${blackhole2}'s size is ${difference.toLocaleString()} light years bigger than ${blackhole1}'s size.`;
    } else if (difference < 0) {
      resultMessage = `${blackhole1}'s size is ${Math.abs(
        difference
      ).toLocaleString()} light years bigger than ${blackhole2}'s size.`;
    } else {
      resultMessage = `${blackhole1} and ${blackhole2} have the same size.`;
    }

    // Result
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid galaxies for comparison.";
  }
}

function blackholeMass() {
  const blackhole1 = document.getElementById("blackhole1").value;
  const blackhole2 = document.getElementById("blackhole2").value;

  const blackholeMass = {
    SagittariusA: 4100000,
    M87: 6500000000,
    CygnusX1: 1500000,
    Gargantua: 100000000,
  };

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";

  if (
    blackholeMass.hasOwnProperty(blackhole1) &&
    blackholeMass.hasOwnProperty(blackhole2)
  ) {
    const mass1 = blackholeMass[blackhole1];
    const mass2 = blackholeMass[blackhole2];

    const ratio = mass2 / mass1;

    let resultMessage = "";
    if (ratio > 1) {
      resultMessage = `${blackhole2}'s mass is ${ratio.toFixed(
        // burda to fixed ondalıklı sayıyı azaltmak için kullanıldı
        1
      )} times bigger than ${blackhole1}'s mass.`;
    } else if (ratio < 1) {
      // 2. blackhole 1. blackholedan büyükse denildi
      resultMessage = `${blackhole1}'s mass is ${(1 / ratio).toFixed(
        1
      )} times bigger than ${blackhole2}'s mass.`;
    } else {
      resultMessage = `${blackhole1} and ${blackhole2} have the same mass.`;
    }

    // Sonuç
    resultElement.innerHTML = resultMessage;
  } else {
    resultElement.innerHTML = "Please select valid blackholes for comparison.";
  }
}
