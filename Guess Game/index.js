'use strict';

// FOR MODAL

//body background
const sectionBody = document.querySelector('.section-body');
//

const btnPlay = document.querySelector('.btn-play'); //for uwak
const header = document.querySelector('.header'); // for play btn
const closeBtn = document.querySelector('.close-btn');
const inputs = document.querySelector('.inputs');
const guess = document.querySelector('.guess');
const messageAgain = document.querySelector('.message-again');
// const scoreContainer = document.querySelector('.score-container');

btnPlay.addEventListener('click', function () {
  //
  //body background
  sectionBody.style.backgroundColor = '#96f2d7';
  // add hidden to the play button and uwak header
  btnPlay.classList.add('hidden');
  header.classList.add('hidden');

  // remove hidden show the game

  closeBtn.classList.remove('hidden');
  inputs.classList.remove('hidden');
  guess.classList.remove('hidden');
  messageAgain.classList.remove('hidden');
});

// Remove game

closeBtn.addEventListener('click', function () {
  //body background
  sectionBody.style.backgroundColor = '#e6fcf5';

  btnPlay.classList.remove('hidden');
  header.classList.remove('hidden');

  closeBtn.classList.add('hidden');
  inputs.classList.add('hidden');
  guess.classList.add('hidden');
  messageAgain.classList.add('hidden');
  scoreContainer.classList.add('hidden');
});

// FIREWORKS

// const fireWorks = function () {
//   const fireDiv = document.querySelector('.fireworksDiv');
//   const fireworks = new Fireworks(fireDiv, {
//     delay: { min: 10, max: 15 },
//     trace: 5,
//     speed: 0.5,
//     particles: 200,
//     sound: {
//       enable: true,
//       files: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
//       volume: { min: 1, max: 2 },
//     },
//   });

//   fireworks.start();

//   var context = new AudioContext();

//   // window.onload = () => {
//   //   context.resume().then(() => {
//   //     console.log('Playback resumed successfully');
//   //   });
//   // }

//   document.addEventListener('click', () => {
//     context.resume().then(() => {
//       console.log('Playback resumed successfully');
//     });
//   });
// };

// FOR THE GAME

const btnNumber = document.querySelectorAll('.btn-num');
const inputField = document.querySelector('.input-field');
const btnCheck = document.querySelector('.btn-check');
const message = document.querySelector('.message');
const again = document.querySelector('.btn-again');
const guessTxt = document.querySelector('.guess-txt');

let randomNumber = Math.trunc(Math.random() * 20) + 1;

for (let i = 0; i < btnNumber.length; i++) {
  let numberText = btnNumber[i].textContent;

  btnNumber[i].addEventListener('click', function () {
    inputField.value = numberText;

    btnCheck.addEventListener('click', function () {
      const guess = Number(numberText);
      if (guess === randomNumber) {
        // fireWorks();
        message.textContent = `🥳 Correct number!`;
        document.querySelector('.guess').textContent = randomNumber;
      } else if (guess < randomNumber) {
        message.textContent = `👇 To low!`;
      } else if (guess > randomNumber) {
        message.textContent = `👆 To high!`;
      } else {
        message.textContent = `😭 You lost the game...`;
      }
    });
  });
}

again.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').textContent = '?';
  message.textContent = `Start guessing...`;
  inputField.value = '';

  //
});
