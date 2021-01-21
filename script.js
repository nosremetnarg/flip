const card = document.querySelector(".card__inner");
const image = document.querySelector(".card__face--back");
const tarot = document.querySelector(".hermit");
// Titles of Tarot Cards
const photoArray = [
  "theHermit",
  "wheelOfFortune",
  "theJourney",
  "STRENGTH",
  "TEMPERANCE",
  "theLovers",
];
let isFlipped = false;

let photoIndex;
// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  console.log(randomNum);
  photoIndex = randomNum;

}



// Event listener for clicks
card.addEventListener("click", function () {
    randomNumber();
    loadPicture(photoArray[photoIndex]);
  card.classList.toggle("is-flipped");
  
  if (!isFlipped) {
    randomNumber();
    isFlipped = true;
  } else if (isFlipped){
      isFlipped = false;
  }
  console.log(`is the card flipped ${isFlipped}`);
});

function loadPicture(photo) {
  console.log(`title ${photo}`);
  if (!isFlipped) {
    tarot.src = `img/${photo}.png`;
  } 

}
