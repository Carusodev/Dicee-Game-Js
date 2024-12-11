// Using an alert to see if the js file works
alert("Test");



// Generate random numbers for two dice from 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the <img> elements with the ids, to channel the new variables with the ids
var leftDice = document.getElementById("img1");
var rightDice = document.getElementById("img2");

// Set the dice images based on random numbers with the var, the script works thanks to number plus png name
leftDice.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
rightDice.setAttribute("src", "./images/dice" + randomNumber2 + ".png");


/*  Change the text in the h1, (which currently says Refresh Me) 
    to show which user won or if there was a draw depending on the dice values of player 1 (left) and player 2 (right).

Hint: You'll need to use an if statement,
 querySelector() and the innerHTML property to change the text in the h1.

 EX document.getElementById("example").innerHTML = "Goodbye, <em>world!</em>";
 avevo sbagliato mettendo dentro lif le variabili left and right dice mentre dovevo uare i random
 */

 // Compare the values of the dice and update the h1 text
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1, WON";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2, WON";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw!";
}