document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("LengthConverterForm");
    const conversionResult = document.getElementById("conversionResult");
	const alternativeResult = document.getElementById("alternativeResult");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const originalValue = parseFloat(document.getElementById("originalValue").value);
        const originalUnit = document.getElementById("originalUnit").value;
        const targetUnit = document.getElementById("targetUnit").value;

        let convertedValue;

		switch(originalUnit){
			
			case "mm":
				switch(targetUnit){
					case "cm":
						convertedValue = originalValue / 10;
					break;
					
					case "m":
						convertedValue = originalValue / 1000;
					break;
					
					case "km":
						convertedValue = originalValue / 1000000;
					break;
					
					case "feet":
						convertedValue = originalValue / 304.8;
					break;
					
					case "inch":
						convertedValue = originalValue / 25.4;
					break;
					
					case "yards":
						convertedValue = originalValue / 914.4;
					break;
					
					case "mile":
						convertedValue = originalValue / 1609344;
					break;
					
					case "mm":
					
					break;
				}
				
			break;
			
			case "cm":
				switch(targetUnit){
					case "cm":
					break;
					
					case "m":
						convertedValue = originalValue / 100;
					break;
					
					case "km":
						convertedValue = originalValue / 100000;
					break;
					
					case "feet":
						convertedValue = originalValue / 30.48;
					break;
					
					case "inch":
						convertedValue = originalValue / 2.54;
					break;
					
					case "yards":
						convertedValue = originalValue / 91.44;
					break;
					
					case "mile":
						convertedValue = originalValue / 160934.4;
					break;
					
					case "mm":
						convertedValue = originalValue * 10;
					break;
				}
			break;
			
			case "m":
				switch(targetUnit){
				case "cm":
					convertedValue = originalValue * 100;
				break;
					
				case "m":		
				break;
				
				case "km":
					convertedValue = originalValue / 1000;
				break;
					
				case "feet":
					convertedValue = originalValue / 0.3048;
				break;
					
				case "inch":
					convertedValue = originalValue / 0.0254;
				break;
				case "yards":
					convertedValue = originalValue / 0.9144;
				break;
					
				case "mile":
					convertedValue = originalValue / 1609.344;
				break;
				
				case "mm":
					convertedValue = originalValue * 1000;
				break;
				
				}
			break;
			
			case "km":
				switch(targetUnit){
				case "m":
					convertedValue = originalValue * 1000;
				break;
				case "cm":
					convertedValue = originalValue * 100000;
				break;
				
				case "km":
				break;
					
				case "feet":
					convertedValue = originalValue / 0.00003048;
				break;
					
				case "inch":
					convertedValue = originalValue / 0.0000254;
				break;
				case "yards":
					convertedValue = originalValue / 0.0009144;
				break;
					
				case "mile":
					convertedValue = originalValue / 1.609344;
				break;
				
				case "mm":
					convertedValue = originalValue * 1000000;
				break;
				
				}
			break;
			
			case "feet":
				switch(targetUnit){
				case "mm":
					convertedValue = originalValue * 304.8;
				break;
				case "m":
					convertedValue = originalValue * 0.3048;
				break;
				case "cm":
					convertedValue = originalValue * 30.48;
				break;
				
				case "km":
					convertedValue = originalValue * 0.0003048;
				break;
					
				case "feet":
				break;
					
				case "inch":
					convertedValue = originalValue * 12;
				break;
				case "yards":
					convertedValue = originalValue / 3;
				break;
					
				case "mile":
					convertedValue = originalValue / 5280;
				break;
				
				}
			break;
			
			case "inch":
				switch(targetUnit){
				case "mm":
					convertedValue = originalValue * 25.4;
				break;
				case "m":
					convertedValue = originalValue * 0.0254;
				break;
				case "cm":
					convertedValue = originalValue * 2.54;
				break;
				
				case "km":
					convertedValue = originalValue * 0.000254;
				break;
					
				case "feet":
					convertedValue = originalValue / 12;
				break;
					
				case "inch":
				break;
				case "yards":
					convertedValue = originalValue / 36;
				break;
					
				case "mile":
					convertedValue = originalValue / 63360;
				break;
				}
			break;
			
			case "yards":
				switch(targetUnit){
				case "mm":
					convertedValue = originalValue * 914.4;
				break;
				case "m":
					convertedValue = originalValue * 0.9144;
				break;
				case "cm":
					convertedValue = originalValue * 91.4;
				break;
				
				case "km":
					convertedValue = originalValue * 0.0009144;
				break;
					
				case "feet":
					convertedValue = originalValue * 3;
				break;
					
				case "inch":
					convertedValue = originalValue * 36;
				break;
				
				case "yards":
				break;
					
				case "mile":
					convertedValue = originalValue / 1750;
				break;
				
				}
			break;
			
			case "mile":
				switch(targetUnit){
				case "mm":
					convertedValue = originalValue * 1609344;
				break;
				case "m":
					convertedValue = originalValue * 160934.4;
				break;
				case "cm":
					convertedValue = originalValue * 1609.344;
				break;
				
				case "km":
					convertedValue = originalValue * 1.609344;
				break;
					
				case "feet":
					convertedValue = originalValue * 5280;
				break;
					
				case "inch":
					convertedValue = originalValue * 63360;
				break;
				
				case "yards":
					convertedValue = originalValue * 1750;
				break;
					
				case "mile":
				break;
				
				}
			break;
			
		}
       
	   
		conversionResult.innerHTML = `Converted Value: ${convertedValue.toFixed(3)} ${targetUnit}`;
		
		
		if(targetUnit === "feet"){
			let temp = 0;
			temp = Math.floor(convertedValue);
			const alternativeValue = (convertedValue - temp) * 12;
			alternativeResult.innerHTML = `Alternative Value: ${temp} feet and ${alternativeValue.toFixed(2)} inches`; 
		} 
		else{
			alternativeResult.innerHTML = "";
		}
        
    });
});
