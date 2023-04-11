/* logic
create webpage of 16x16 grid of square divs
  use javascript (for loop to generate new nodes, tracking rows and columns)
  'it's best to put your grid squares inside another 'container' div'
  use flexbox
  create hover effect so grid divs change color
  create a button asking for user input defining how many squares per side
    of new grid (max 100) of the same size;

'extra credit: Instead of just changing the color of a square from black
 to white (for example), have each pass through with the mouse
 change it to a completely random RGB value. Then try having each
 pass just add another 10% of black to it so that only after 10
  passes is the square completely black.
  */

// get user-defined number of squares for the grid
var squares = prompt("How many squares wide would you like your grid?");

// test to make sure the number is within a reasonable range
if (squares <=0 || squares >100) {
  prompt("Number needs to be between 1 and 100.");
}

// normalize the size of the squares so total width is always 960px
var squareWidth = 960 / squares;
var squareHeight = 960 / squares;
squareWidth = squareWidth.toString() + "px";
squareHeight = squareHeight.toString() + "px";

// generate the div elements
for (var i = 1; i <= squares; i++) {
	const div = document.createElement("div");
	div.style.width = squareWidth;
	div.style.height = squareHeight;
	div.style.background = "white";
	div.innerHtml = i.toString();
	document.body.appendChild(div);
}