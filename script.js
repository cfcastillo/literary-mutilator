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
					rot13AssocArray();
					//rot13AsciiCodes();
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
	//todo: research how the below logic works.
	paragraph.innerText = pText.sort(() => Math.random() - 0.5).join(' ');
}

/**
 * uses associative array to implement rot13 character substitution.
 */
function rot13AssocArray() {
	//todo: list half of array and have logic go backward or forward. i.e. if not found, then look at reverse value.
	let arr = {'a':'z', 'b':'y', 'c':'x', 'd':'w', 'e':'v', 'f':'u', 'g':'t', 'h':'s', 'i':'r', 'j':'q', 'k':'p', 'l':'o', 'm':'n',
		'z':'a', 'y':'b', 'x':'c', 'w':'d', 'v':'e', 'u':'f', 't':'g', 's':'h', 'r':'i', 'q':'j', 'p':'k', 'o':'l', 'n':'m'};
	let paragraphs = document.querySelectorAll(('p'));
	for (let paragraph of paragraphs){
		let replaceChars = function(c){
			//if found, returns substitute char. If not found, returns the character.
			//todo: need to handle case.
			return arr[c] || c;
		};
		paragraph.innerText = paragraph.innerText.split('').map(replaceChars).join('');
	}
}

/**
 * uses ascii codes to implement rot13 character substitution
 */
function rot13AsciiCodes() {
	//lowercase dec 97 (a) - 122 (z)
	//uppercase dec 65 (A) - 90 (Z)
	//String.fromCharCode(asciiCode) = string value.
	//"A".charCodeAt() = character code for A
	/*
		lower case
		97=122
		98=121
		...
		109=110

		upper case
		65=90
		66=89
		...
		77=78
	*/
	return;
}

function fetchData() {
	fetch('https://jsonplaceholder.typicode.com/posts/1')
		.then(response => response.json())
		.then((json) => {
			var newP = document.createElement("p");
			var pText = document.createTextNode(json.title);
			newP.style.color = "red";
			newP.appendChild(pText);
			var currentDiv = document.getElementById("p-div");
			currentDiv.appendChild(newP);
		})
}


