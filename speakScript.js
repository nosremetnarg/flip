const msgEl = document.getElementById("msg");

const randomNum = getRandomNumber();

console.log("NUMBER", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

// Start recognition and start
recognition.start();

// Capture user speak
function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  console.log(msg);

  writeMessage(msg);
  checkNumber(msg);
}

// Check msg against number
function checkNumber(msg) {
  const num = +msg;

  // Check if valid number
  // if(Number.isNaN(num)) {
  //     msgEl.innerHTML += "<div>That is not a valid number</div>";
  //     return;
  // }

  // // Check in range
  // if(num > 100 || num < 1) {
  //     msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
  //     return;
  // }

  // Check number
  // if(num === randomNum) {
  //     document.body.innerHTML = `
  //     <h2>Congrats! You have guessed the number! <br><br>
  //     It was ${num}</h2>
  //     <button class="play-again" id="play-again">Play Again</button>`
  // } else if (num > randomNum){
  //     msgEl.innerHTML += '<div>Go lower</div>';
  // } else {
  //     msgEl.innerHTML += '<div>Go higher</div>';
  // }

  // Check Message
  if (
    msg === "I'm Not Afraid of the Dark" ||
    msg === `I am not afraid of the dark`
  ) {
    document.body.innerHTML = `
     <h2>Congrats! You have unlocked the door! <br><br></h2>
     <button class="play-again" id="play-again">Play Again</button>
     <a class="play-again continue" rel="video" href="/flip/sortList.html">Continue on<a/>
        `;
  } else {
    msgEl.innerHTML += "<div>Try again</div>";
  }
}

// write what user speaks
function writeMessage(msg) {
  msgEl.innerHTML = `
    <div>You Said: </div>
    <span class="box">${msg}</span>`;
}

// Generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Speak result
recognition.addEventListener("result", onSpeak);

//end SR service
recognition.addEventListener("end", () => recognition.start());

document.body.addEventListener("click", (e) => {
  if (e.target.id == "play-again") {
    window.location.reload();
  }
});
