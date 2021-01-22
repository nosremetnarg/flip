const card = document.querySelector(".card__inner");
const image = document.querySelector(".card__face--back");
const tarot = document.querySelector(".hermit");

// Titles of Tarot Cards
const photoArray = [
  "theHermit",
  "wheelOfFortune",
  "theJourney",
  "strength",
  "TEMPERANCE",
  "theLovers",
  "theEmpress",
  "theStar",
  "judgement",
  "theSun",
  "theMagician",
];




let isFlipped = false;
let photoIndex;

// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  console.log(randomNum);
  photoIndex = randomNum;
}
// call on page load
randomNumber();
loadPicture(photoArray[photoIndex])

function loadPicture(photo) {
  console.log(`title ${photo}`);
    tarot.src = `img/${photo}-min.png`;
  
}

// Event listener for clicks
card.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
  if (!isFlipped) {
    
    isFlipped = true;
  } else if (isFlipped) {
    randomNumber();
    setTimeout(function(){ loadPicture(photoArray[photoIndex]); }, 250);
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
