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
let photoIndex;
// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  console.log(randomNum);
  //   return randomNum;
  photoIndex = randomNum;
  //   loadPicture(photoArray[photoIndex]);
}
// random photo index number
// let photoIndex = randomNum;

// Initially load photo details into DOM
// loadPicture(photoArray[photoIndex]);
randomNumber();

let isFlipped = false;

// Event listener for clicks
card.addEventListener("click", function () {
  card.classList.toggle("is-flipped");
  loadPicture(photoArray[photoIndex]);
  
  if (!isFlipped) {
    randomNumber();
    isFlipped = true;
  } else if (isFlipped){
      isFlipped = false;
  }
  console.log(isFlipped);
});

function loadPicture(photo) {
  console.log(`title ${photo}`);
  if (!isFlipped) {
    tarot.src = `img/${photo}.png`;
  } 
//   else if (!isFlipped) {
//     setTimeout(function () {
//       tarot.src = `img/${photo}.png`;
//     }, 2000);
//   }
}
