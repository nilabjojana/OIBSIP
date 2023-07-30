let selectedUnit = 'Celsius';

function setUnit(unit) {
  selectedUnit = unit;
  updateActiveUnitButton();
}

function updateActiveUnitButton() {
  const unitButtons = document.querySelectorAll('.unit-button');
  unitButtons.forEach(button => {
    button.classList.remove('active');
    if (button.textContent === selectedUnit) {
      button.classList.add('active');
    }
  });
}

function convertTemperature() {
  const temperatureInput = document.getElementById("temperature").value;
  const resultDisplay = document.getElementById("result");

  if (isNaN(temperatureInput)) {
    resultDisplay.innerText = "Please enter a valid number.";
    return;
  }

  const temperature = parseFloat(temperatureInput);

  let convertedTemperature;
  let convertedUnit;

  if (selectedUnit === "Celsius") {
    convertedTemperature = temperature;
    convertedUnit = "Celsius";
  } else if (selectedUnit === "Fahrenheit") {
    convertedTemperature = (temperature * 9/5) + 32;
    convertedUnit = "Fahrenheit";
  } else if (selectedUnit === "Kelvin") {
    convertedTemperature = temperature + 273.15;
    convertedUnit = "Kelvin";
  }

  resultDisplay.innerText = `Converted temperature: ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}

updateActiveUnitButton();
