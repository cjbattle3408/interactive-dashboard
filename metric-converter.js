const converterForm = document.getElementById("converter-form");
const inputValue = document.getElementById("input-value");
const conversionType = document.getElementById("conversion-type");
const conversionResult = document.getElementById("conversion-result");

converterForm.addEventListener("submit", function (event) {
	event.preventDefault();

	const input_value = parseFloat(inputValue.value);
	const selectedConversion = conversionType.value;
	let result;
	let originalUnit;
	let convertedUnit;

	if (isNaN(input_value)) {
		conversionResult.innerHTML = "Please enter a valid number.";
		return;
	}

	if (selectedConversion === "inchesToCentimeters") {
		result = input_value * 2.54;
		originalUnit = "inches";
		convertedUnit = "centimeters";
	} else if (selectedConversion === "centimetersToInches") {
		result = input_value / 2.54;
		originalUnit = "centimeters";
		convertedUnit = "inches";
	} else if (selectedConversion === "feetToMeters") {
		result = input_value * 0.3048;
		originalUnit = "feet";
		convertedUnit = "meters";
	} else if (selectedConversion === "metersToFeet") {
		result = input_value / 0.3048;
		originalUnit = "meters";
		convertedUnit = "feet";
	} else if (selectedConversion === "yardsToMeters") {
		result = input_value * 0.9144;
		originalUnit = "yards";
		convertedUnit = "meters";
	} else if (selectedConversion === "metersToYards") {
		result = input_value / 0.9144;
		originalUnit = "meters";
		convertedUnit = "yards";
	} else if (selectedConversion === "milesToKilometers") {
		result = input_value * 1.609344;
		originalUnit = "miles";
		convertedUnit = "kilometers";
	} else if (selectedConversion === "kilometersToMiles") {
		result = input_value / 1.609344;
		originalUnit = "kilometers";
		convertedUnit = "miles";
	}

	conversionResult.innerHTML =
		input_value +
		" " +
		originalUnit +
		" is " +
		result.toFixed(2) +
		" " +
		convertedUnit +
		".";
});
