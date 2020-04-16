window.onload = function(){
	initForm();
}

function initForm(){
	let p1 = document.getElementById("p1");
	let p2 = document.getElementById("p2");
	let p3 = document.getElementById("p3");

	p1.style.color = "red";
	p2.style.color = "orange";
	p3.style.color = "blue";

	setEventListeners();
}

function setEventListeners() {
	//iterate all p elements on the screen and setup event listeners
	// Array.prototype.forEach(document.getElementsByTagName("p") => el {
	// 	el.color = "red";
	// }
}