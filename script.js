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
  "theMagician"
];

let isFlipped = false;
let photoIndex;

// Picks random photo index
function randomNumber() {
  let randomNum = Math.floor(Math.random() * photoArray.length);
  console.log(randomNum);
  photoIndex = randomNum;

}
function loadPicture(photo) {
    console.log(`title ${photo}`);
    if (!isFlipped) {
      tarot.src = `img/${photo}-min.png`;
    } 
  }

// Event listener for clicks
card.addEventListener("click", function () {
    
    // loadPicture(photoArray[photoIndex]);
    card.classList.toggle("is-flipped");
    
  if (!isFlipped) {
    loadPicture(photoArray[photoIndex]);
    isFlipped = true;

  } else if (isFlipped) { 
    randomNumber();
      isFlipped = false;
  }
  console.log(`is the card flipped ${isFlipped}`);
});

randomNumber();


// Trying to do this with an object

const tarotObjectArray = [

    {
        'title': 'theHermit',
        'info': 'The lesson and reward but also misfortune of solitude.',
        "index" : 1
    },

]