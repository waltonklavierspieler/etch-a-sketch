//vvvvvvvvv Buttons and their related click events vvvvvvvvvv
//create a button for generating square
const gridButton = document.querySelector('button');
gridButton.addEventListener('click', createGrid);

//a button to collapse the grid
const clearButton = document.getElementById('clearBoard');
clearButton.addEventListener('click', clearBoard);

//create shake button to revert all squares to white;
const shakeButton = document.getElementById('shake');
shakeButton.addEventListener('click', function () {
	const shakeEffect = document.querySelectorAll('.row');
	shakeEffect.forEach(function (node) {
		node.style.background = "white";
	});
});

//a button that returns a user-selected color
//const colorSelect = document.getElementById('colorButton');
//colorSelect.addEventListener('click', getColor, {once : true});

var currentColor = 'black';
var colorList = ['black', 'red', 'purple', 'green', 'lime', 'gray', 'teal',
					'aqua', 'azure', 'blanchedalmond', 'coral', 'cornflowerblue',
					'crimson', 'darkseagreen', 'darkslategray', 'lavender',
					'yellow', 'navy', 'crimson'];
const buttonGenParent = document.querySelector('.colorDiv');
colorList.forEach(function (color) {
	const button = document.createElement('button');
	button.style.background = color;
	buttonGenParent.appendChild(button);
	button.classList.add('chooseColors');
	button.addEventListener('click', function() {
		console.log('Clicked ' + color);
		currentColor = color;
		}
	);
	}
);

//helper function to get number input from user
function getNum () {
	var num = prompt('Pick a number');
	//account for cancel button
	if (num === null) {
		return
	}
	alert('You picked: ' + num);
	//account for number out of range
	if ((num < 0) || (num > 100)) {
		alert('You need to pick a number between 1 - 100')
		num = getNum();
	}
	return num;
}

//function to create grid
function createGrid(n) {
	//clear grid first:
	clearBoard();
	n = getNum();
	//for loop to generate n number of divs
	const parent = document.querySelector('.container');
	for (var i = 1; i <= n; i++) {
		const div = document.createElement('div');
		div.classList.add('column');
		div.id = i.toString();
		div.style.border = '0.1px solid gray';
		parent.appendChild(div);
	}

	const columnList = document.querySelectorAll('.column');
	columnList.forEach(
		function(node) {
			for (var k = 1; k <= n; k++) {
				const div = document.createElement('div');
				div.classList.add('row');
				div.id = k.toString();
				div.style.border = '0.1px solid gray';
				node.appendChild(div);
			}
		}
)	;

	//create on Hover effect to change color of each div;
	const hoverEffect = document.querySelectorAll('.row');
	hoverEffect.forEach(function (node) {
		var mousePressed = false;
		node.addEventListener('mousedown', function () {
			mousePressed = true;
		});
 	 node.addEventListener('mouseover', function (node) {
			if (!mousePressed) {
				node.toElement.style.background = currentColor;
			}
		});
	});
}
//function to clear the board and destroy the grid of divs
function clearBoard () {
	const columnList = document.querySelectorAll('.column');
	columnList.forEach(
		function(node) {
			node.remove();
		}
	);
}