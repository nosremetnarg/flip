const card = document.querySelector(".card__inner");
const image = document.querySelector('.card__face--back');
const tarot = document.querySelector('.hermit');

// Titles of Tarot Cards
const photoArray = [

"theHermit",
"wheelOfFortune",
"theJourney",
"STRENGTH",
"TEMPERANCE",
"theLovers"

]

// Picks random photo index
const randomNumber = Math.floor(Math.random() * photoArray.length);
console.log(randomNumber);

// random photo index number
let photoIndex = randomNumber;

// Initially load photo details into DOM
loadPicture(photoArray[photoIndex]);

card.addEventListener('click', function () {
    card.classList.toggle('is-flipped')
})

function loadPicture(photo) {
    console.log(`title ${photo}`);
    tarot.src = `img/${photo}.png`;

}
