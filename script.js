var gameContainer = document.getElementById("game-container"); //Where i declare each variable using var.
var target = document.getElementById("target");  // getElementById is used to acess the element in the brackets.
var scoreValue = document.getElementById("score-value");
var timerValue = document.getElementById("time-value");

let score = 0;
let timer;
let timeLeft;
let difficulty = "easy"; //beginner level is displayed when game launches.

function getRandomPosition() { //function is called to create the targets random movement around the box(game-container).
    var containerWidth = gameContainer.clientWidth - target.clientWidth;
    var containerHeight = gameContainer.clientHeight - target.clientHeight; //The game containers size.

    var x = Math.floor(Math.random() * containerWidth);
    var y = Math.floor(Math.random() * containerHeight); //Math random is used to produce a random number between 0 & 1. so when you use Math.floor(Math.random() * containerWidth); u get an integer as it is multiplied by the containers height and width.

    return { x, y };
}

function updateTargetPosition() {
    var position = getRandomPosition(); // position of the target movement after being clicked by cursor.
    target.style.left = `${position.x}px`;
    target.style.top = `${position.y}px`; //the string that represnts the CSS property value, evrything in the '${}' will be read as an expression and is inserted into the string.
}

function handleTargetClick() { //fuction that is used for the target so the score goes up when clicked.
    score++; //increment used to add each point collected from 
    scoreValue.textContent = score;
    updateTargetPosition();
}

function beginClock() {
    if (difficulty === "easy") { //I used the if,else if statement to display the time depending on the button that has been selected.
        timeLeft = 45;
    } else if (difficulty === "medium") {
        timeLeft = 25;
    } else {
        timeLeft = 10;
    }

    timer = setInterval(() => {
        if (timeLeft <= 0) {
            endGame();
            return;
        }

        timeLeft--;
        timerValue.textContent = timeLeft;
    }, 1000);
}

function setDifficulty(level) {
    difficulty = level;
    clearInterval(timer);
    beginClock();
    updateTargetPosition();
}

function endGame() {
    clearInterval(timer); //removes finished time at end of game.
    alert("This game has concluded. Your score was " + score); //alert popup box for when the game has ended, displays players score.
    score = 0;
    scoreValue.textContent = score;
    timeLeft = 45;
    timerValue.textContent = timeLeft;
    updateTargetPosition();
}

target.addEventListener("click", handleTargetClick); //adds a click event to a <button> element.

beginClock();
updateTargetPosition();


	// what i used to find the height and width of my div : https://www.w3schools.com/jsref/prop_element_clientwidth.asp
	
	// resource i used for mathfloor and mathrandom : https://www.codecademy.com/forum_questions/5020be4d3a51800002015ebe

	// what i used to learn about x and y CSS cordinate systems: https://developer.mozilla.org/en-US/docs/Web/CSS/CSSOM_view/Coordinate_systems
	
	// Github