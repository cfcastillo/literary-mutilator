if (window.addEventListener) { // Mozilla, Netscape, Firefox
	window.addEventListener('load', WindowLoad, false);
} else if (window.attachEvent) { // IE
	window.attachEvent('onload', WindowLoad);
}

//load events for all items in dom when window is loaded.
function WindowLoad(event){
	//apply click event to all buttons
	let buttons = document.querySelectorAll('button');
	for (let button of buttons) {
		button.addEventListener(('click'), (e) => {
			switch (button.id){
				case "change-p-color":
					setParagraphColors();
					break;
				case "change-flower-to-other":
					setParagraphText();
					break;
				case "make-anagram":
					createAnagram();
					break;
				case "fetch-data":
					fetchData();
					break;
				case "encrypt-p":
					encryptParagraph();
					break;
				case "reset-form":
					resetForm();
					break;
				default:
					break;
			};
		})

		button.addEventListener(('mouseover'), (e) => {
			console.log('hovered over button' + button.id);
		})

		button.addEventListener(('mouseout'), (e) => {
			console.log('left button' + button.id);
		})
	}
}

function setParagraphColors() {
	let color_val = document.getElementById('pick-color')
	let paragraphs = document.querySelectorAll(('p'));
	for (let paragraph of paragraphs){
		paragraph.style.color = color_val.value;
	}
}

function setParagraphText() {
	let text_val = document.getElementById('type-value')
	let paragraphs = document.querySelectorAll(('p'));
	for (let paragraph of paragraphs){
		paragraph.innerText = paragraph.innerText.replace(/flower/gi,text_val.value);
	}
}

function createAnagram() {
	let paragraph = document.getElementById('p2');
	let pText = paragraph.innerText.split(' ');
	//not sure exactly how the Math.random() - 0.5 works.
	paragraph.innerText = pText.sort(() => Math.random() - 0.5).join(' ');
}

function encryptParagraph() {
	return;
}

function fetchData() {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(response => response.json())
		.then((json) => {
			var newP = document.createElement("p");
			var pText = document.createTextNode(json.title);
			newP.appendChild(pText);
			var currentDiv = document.getElementById("p-div");
			currentDiv.appendChild(newP);
		})
}

function resetForm() {
	return;
}

