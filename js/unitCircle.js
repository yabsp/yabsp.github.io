const unitCircle = document.getElementById("unitCircle");
const point = document.getElementById("point");
const angle = document.getElementById("angle");
const radAngle = document.getElementById("radAngle");

let Rad = 0;

function updatePointPos(){
	const radius = unitCircle.offsetWidth / 2;
	const x = radius * Math.cos(Rad) + radius;
	const y = radius * Math.sin(Rad) + radius;
	point.style.left = `${x}px`;
	point.style.top = `${y}px`;
}

function updateAngleDisp (){
	
	let angleDeg = 0;
	if(Rad > 0){
		angleDeg = 360 - ((Rad / Math.PI) * 180);
		Rad = 2 * Math.PI - Rad;
	}
	else{
	   angleDeg = (-1)*(Rad / Math.PI) * 180;
	   Rad = (-1) * Rad;
	}
	angle.textContent = angleDeg.toFixed(2);
	radAngle.textContent = Rad.toFixed(2);
	
}



unitCircle.addEventListener("click", function(event){
	const rect = unitCircle.getBoundingClientRect();
	const mouseX = event.clientX - rect.left;
	const mouseY = event.clientY - rect.top;
	
	Rad = Math.atan2(mouseY - unitCircle.offsetHeight/2, mouseX - unitCircle.offsetWidth/2);
	
	updatePointPos();
	updateAngleDisp();
});

updatePointPos();
updateAngleDisp();