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
		
		switch(originalUnit){
			case "kg":
				switch(targetUnit){
					case "lbs":
						convertedValue = originalValue * 0.4535924;
					break;
					case "ct":
						convertedValue = originalValue / 5000;
					break;
					case "st":
						convertedValue = originalValue * 0.157473;
				}
			break;
				
			case "lbs":
			
			break;
			
			
			
		}