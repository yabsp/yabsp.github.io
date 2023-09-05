document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("WeightConverterForm");
	const conversionResult = document.getElementById("conversionResult");
	
	form.addEventListener("submit", function(event) {
		event.preventDefault();
		
		const originalValue = parseFloat(document.getElementById("originalValue").value);
		const originalUnit = document.getElementById("originalUnit").value;
		const targetUnit = document.getElementById("targetUnit").value;
		
		let convertedValue;
		
		switch(originalUnit){
			
			case "kg":
				switch(targetUnit) {
					
					case "lbs":
					
						convertedValue = originalValue * 2.204623;
					break;
					
					case "ct":
						convertedValue = originalValue * 5000;
					break;
					
					case "st":
						convertedValue = originalValue * 0.157473;
					break;
					
					case "kg":
					break;
				}
			break;
				
			case "lbs":
			
				switch(targetUnit) {
					
					case "kg":
						convertedValue = originalValue * 0.4535924;
					break;
					
					case "ct":
						convertedValue = originalValue * 2267.962 ;
					break;
					
					case "st":
						convertedValue = originalValue * 0.07142857;
					break;
					
					case "lbs":
					break;
				}
			break;
			
			case "ct":
				switch(targetUnit) {
					
					case "kg":
						convertedValue = originalValue * 0.0002;
					break;
					
					case "lbs":
						convertedValue = originalValue * 0.0004409245;
					break;
					
					case "st":
						convertedValue = originalValue * 0.00003149461;
					break;
					
					case "ct":
					break;
				}		
			break;
			
			case "st":
				switch(targetUnit) {
				
					case "kg":
						convertedValue = originalValue * 6.350293;
					break;
					
					case "lbs":
						convertedValue = originalValue * 14;
					break;
					
					case "ct":
						convertedValue = originalValue * 31751.47;
					break;
					
					case "st":
					break;
				}	
			break;	
			
		}
		
		conversionResult.innerHTML = `Converted Value: ${convertedValue.toFixed(3)} ${targetUnit}`;
	});
});
