const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");


const inputLength = () => {
	return input.value.length;
}

const createDeleteBtn = () => {
	const btn = document.createElement("button");
	btn.className += "delete";
	btn.addEventListener("click", deleteParent);
	const txt = document.createTextNode("x");
	btn.prepend(txt);
	
	return btn;
}

const addDeleteButtons = () => {
	const li = ul.getElementsByTagName("li");
	
	for(let i = 0; i < li.length; i++){
		const btn = createDeleteBtn();
		li[i].prepend(btn);
	}
}

const deleteParent = (evt) => {
	evt.target.removeEventListener("click", deleteParent, false);
	evt.target.parentNode.remove();	
}

const createListElement = () => {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	
	const btn = createDeleteBtn();
	li.prepend(btn);
	
	ul.appendChild(li);
	input.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

const toggleListItem = (event) => {
	event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleListItem);

addDeleteButtons();