// Generate random dice values for player 1 and player 2
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
const leftImg = document.getElementById("img1");
leftImg.src = "images/" + diceImages[randomNumber1 - 1];

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightImg = document.querySelectorAll("img")[1];
rightImg.setAttribute("src", "images/" + diceImages[randomNumber2 - 1]);

let result;
if (randomNumber1 < randomNumber2) {
    result = "Player 2 wins!";
}
else if (randomNumber1 === randomNumber2) {
    result = "It is a draw!";
}
else {
    result = "Player 1 wins!"
}
const resultElement = document.getElementById("result");
resultElement.textContent = result;
