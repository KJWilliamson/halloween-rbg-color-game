// stores the number of squares that will be available in the game as per the mode
let numOfSquares = 6;

// empty array which contains the random six or three RGB color code generated every time the game is reset or the mode is changed.
let colors = [];

let pickedColor;
let squares = document.querySelectorAll(".square");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

