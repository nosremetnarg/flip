const card = document.querySelector(".card__inner");

// Titles of Tarot Cards
const photoArray = [
"Judgement",
"Hermit",
"WheelOfFortune",
"Journey"

]

// // Picks random photo index
// const randomNumber = Math.floor(Math.random() * photoArray.length) + 1;
// console.log(randomNumber);

// // random photo index number
// let photoIndex = randomNumber;

// // Initially load photo details into DOM
// loadPicture(photoArray[photoIndex]);

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
})