if (window.addEventListener) { // Mozilla, Netscape, Firefox
	window.addEventListener('load', WindowLoad, false);
} else if (window.attachEvent) { // IE
	window.attachEvent('onload', WindowLoad);
}

/*
	<button id="change-p-color">Change Paragraph Color</button>
	<br>
	<button id="change-flower-to-other">Set new value for flower</button><input type="text">Type new value</input>
	<br>
	<button id="encrypt-p">Encrypt everything</button>
	<br>
	<button id="make-anagram">Create anagram</button>
	<br>
	<button id="reset-form">Reset Form</button>

*/

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


/*
function WindowLoad(event) {
	let anchorlinks = document.querySelectorAll('a[href^="#"]')

	for (let item of anchorlinks) { // relitere
		item.addEventListener('click', (e)=> {
			let hashval = item.getAttribute('href')
			let target = document.querySelector(hashval)
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
			history.pushState(null, null, hashval)
			e.preventDefault()
		})
	}
}
 */