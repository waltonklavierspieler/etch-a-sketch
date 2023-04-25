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
	const colorSelect = document.getElementById('colorButton');
	colorSelect.addEventListener('click', getColor);
	const currentColor = getColor();

	//helper function for selecting a color
	function getColor() {
		var colorSelector = 'black';
		var colorList = ['black', 'red', 'purple', 'green', 'lime',
						'yellow', 'navy', 'crimson'];
		const buttonGenParent = document.getElementById('colorButton');
		colorList.forEach(function (color) {
			console.log('Color iteration test:' + color);
			const button = document.createElement('button');
			button.style.background = color;
			buttonGenParent.appendChild(button);
			button.classList.add('tempColors');
			button.addEventListener('click', function() {
				console.log('Current color: ' + currentColor);
				console.log('clicked color: ' + button.style.background);
				colorSelector = button.style.background;
				const buttonRemoval = document.querySelectorAll('.tempColors');
				console.log(buttonRemoval);
				buttonRemoval.forEach(function (button) {
					button.remove();
				});
			});
		});
		return colorSelector;
	}
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
			//div.innerHTML = i.toString();
			div.style.border = '0.5px solid black';
			parent.appendChild(div);
			//console.log('New div id is:' + div.id);
		}

		const columnList = document.querySelectorAll('.column');
		columnList.forEach(
			function(node) {
				for (var k = 1; k <= n; k++) {
					const div = document.createElement('div');
					div.classList.add('row');
					div.id = k.toString();
					//div.innerHTML = k.toString();
					div.style.border = '0.5px solid black';
					node.appendChild(div);
					//console.log('New div id is:' + div.id);
				}
			}
		);

		//create on Hover effect to change color of each div;
		const hoverEffect = document.querySelectorAll('.row');
		hoverEffect.forEach(function (node) {
			//console.log(node);
			node.addEventListener('mouseover', function (node) {
				node.toElement.style.background = currentColor;
				//console.log(node.toElement.style);
			}
		);
	});
	}
	//function to clear the board and destroy the grid of divs
	function clearBoard () {
		const columnList = document.querySelectorAll('.column');
		//console.log('Removal attempt of nodeList: ' + columnList);
		columnList.forEach(
			function(node) {
				node.remove();
			}
		);
	}