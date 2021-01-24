const wordEl = document.getElementById("word");
const wrongLetterEl = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popup = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");

const figureParts = document.querySelectorAll(".figure-part");

const words = ["beast", "witch", "river", "alive", "two words"];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

const correctLetters = [];
const wrongLetters = [];

// Show word
function displayWord() {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
    <span class='letter'>
    ${correctLetters.includes(letter) ? letter : ""}
    </span>
    `
      )
      .join("")}
    `;
        const innerWord = wordEl.innerText.replace(/\n/g, "")

    if (innerWord === selectedWord) {
        finalMessage.innerText = "Congratulations! You Won!";
        popup.style.display = "flex";
    }
}

displayWord();
