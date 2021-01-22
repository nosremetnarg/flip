const card = document.querySelector(".card__inner");
const image = document.querySelector(".card__face--back");
const tarot = document.querySelector(".hermit");
const cardTitle = document.querySelector('.card__text--title')

// Titles of Tarot Cards
const photoArray = [
  "the Hermit",
  "wheel Of Fortune",
  "the Journey",
  "strength",
  "TEMPERANCE",
  "the Lovers",
  "the Empress",
  "the Star",
  "judgement",
  "the Sun",
  "the Magician",
];

let isFlipped = false;
let photoIndex;

// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  console.log(randomNum);
  photoIndex = randomNum;
}
// Load picture on initial page load
randomNumber();
loadPicture(photoArray[photoIndex]);
getPhototitle(photoArray[photoIndex])

function loadPicture(photo) {
  console.log(`title ${photo}`);
  tarot.src = `img/${photo}-min.png`;
}

function getPhototitle(photo) {
  let title = photo;
  console.log(title);
}

// Event listener for clicks
card.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
  if (!isFlipped) {
    isFlipped = true;
    cardTitle.innerHTML = photoArray[photoIndex];
  } else if (isFlipped) {
    randomNumber();
    setTimeout(function () {
      loadPicture(photoArray[photoIndex]);
    }, 250);
    cardTitle.innerHTML = "&nbsp";
    isFlipped = false;
  }
  console.log(`is the card flipped ${isFlipped}`);
});

// window.addEventListener('load', function(e) {
//     randomNumber();
//     loadPicture(photo);
// })

// Trying to do this with an object

const tarotObjectArray = [
  {
    title: "theHermit",
    info: "The lesson and reward but also misfortune of solitude.",
    index: 1,
  },
];
