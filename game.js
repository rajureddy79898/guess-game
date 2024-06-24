let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! stupid 🐷! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! ediot ☠! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "congratulations 🎉!.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "enter valid number 🙂!";
        gameResult.style.backgroundColor = "red";
    }
}