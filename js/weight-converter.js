document.addEventListener("DOMContentLoaded", function(){
	const form = document.getElementById("WeightConverterForm");
	const conversionResult = document.getElementById(conversionResult");
	const alternativeResult = document.getElementById(alternativeResult");
	
	form.addEventListener("submit", function(event){
		event.preventDefault();
		
		const originalValue = parseFloat(document.getElementById("originalValue").value);
		const originalUnit = document.getElementById("originalUnit").value;
		const targetUnit = document.getElementById("targetUnit").value;
		
		let convertedValue;