const flags = [
  { name: "USA", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" },
  { name: "UK", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1920px-Flag_of_the_United_Kingdom.svg.png" },
  { name: "France", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png" },
  { name: "Germany", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1920px-Flag_of_Germany.svg.png" },
  { name: "Canada", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png" },
  { name: "Italy", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/1920px-Flag_of_Italy.svg.png" },
  { name: "Spain", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1920px-Flag_of_Spain.svg.png" },
  { name: "Australia", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/1920px-Flag_of_Australia.svg.png" },
  { name: "Japan", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1920px-Flag_of_Japan.svg.png" },
  { name: "China", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png" },
  { name: "Russia", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1920px-Flag_of_Russia.svg.png" },
  { name: "Brazil", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1920px-Flag_of_Brazil.svg.png" },
  { name: "India", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png" },
  { name: "South Africa", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1920px-Flag_of_South_Africa.svg.png" },
  { name: "Mexico", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1920px-Flag_of_Mexico.svg.png" },
  { name: "Argentina", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1920px-Flag_of_Argentina.svg.png" },
  { name: "Egypt", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/1920px-Flag_of_Egypt.svg.png" },
  { name: "South Korea", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1920px-Flag_of_South_Korea.svg.png" },
  { name: "Nigeria", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1920px-Flag_of_Nigeria.svg.png" },
  { name: "Sweden", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png" },
  { name: "Turkey", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1920px-Flag_of_Turkey.svg.png" },
  { name: "Greece", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/1920px-Flag_of_Greece.svg.png" },
  { name: "Norway", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1920px-Flag_of_Norway.svg.png" },
  { name: "Switzerland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1920px-Flag_of_Switzerland.svg.png" },
  { name: "Pakistan", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/1920px-Flag_of_Pakistan.svg.png" },
  { name: "Saudi Arabia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1920px-Flag_of_Saudi_Arabia.svg.png" },
  { name: "Indonesia", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1920px-Flag_of_Indonesia.svg.png" },
  { name: "Iran", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/1920px-Flag_of_Iran.svg.png" },
  { name: "Iraq", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/1920px-Flag_of_Iraq.svg.png" },
  { name: "Ireland", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/1920px-Flag_of_Ireland.svg.png" },
  { name: "New Zealand", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1920px-Flag_of_New_Zealand.svg.png" },
  { name: "Portugal", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1920px-Flag_of_Portugal.svg.png" },
  { name: "Vietnam", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png" },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


shuffle(flags);

let currentFlagIndex = 0;
let remainingGuesses = 3; 
let score = 0;

const flagContainer = document.getElementById('flag-container');
const guessesContainer = document.getElementById('guesses-container'); 
const scoreContainer = document.getElementById('score-container'); 
const resultDiv = document.getElementById('result');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const clearButton = document.getElementById('clear-button');

function displayFlag() {
  const flag = flags[currentFlagIndex];
  flagContainer.innerHTML = `<img class="flag" src="${flag.imageUrl}" alt="Flag">`;
  updateGuessesDisplay(); 
}

function updateGuessesDisplay() {
  guessesContainer.textContent = `Remaining Guesses: ${remainingGuesses}`; 
}

function updateScoreDisplay() {
  scoreContainer.textContent = `Score: ${score}`; 
}

function checkGuess(guess) {
  const flag = flags[currentFlagIndex];
  if (guess.toLowerCase() === flag.name.toLowerCase()) {
    resultDiv.innerHTML = "<span style='color: green;'>Correct! 💪🎉</span>"; 
    score += calculateScore(remainingGuesses); 
    updateScoreDisplay(); 
    setTimeout(() => {
      moveToNextFlag(); 
    }, 1000);
  } else {
    resultDiv.innerHTML = "<span style='color: red;'>Incorrect! Try again. 😞🥺</span>"; 
    remainingGuesses--; 
    if (remainingGuesses === 0) {
      setTimeout(() => {
        moveToNextFlag(); 
      }, 1000);
    }
    updateGuessesDisplay(); 
  }
}

function calculateScore(guessesLeft) {
  if (guessesLeft === 3) {
    return 3; 
  } else if (guessesLeft === 2) {
    return 2; 
  } else {
    return 1; 
  }
}

function submitGuess() {
  const guess = guessInput.value.trim();
  if (guess !== '') {
    checkGuess(guess);
    guessInput.value = '';
  }
}

function clearResult() {
  resultDiv.textContent = '';
  guessInput.value = ''; 
}

function moveToNextFlag() {
  currentFlagIndex = (currentFlagIndex + 1) % flags.length;
  remainingGuesses = 3; 
  displayFlag();
}

submitButton.addEventListener('click', submitGuess);

guessInput.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    submitGuess();
  }
});

clearButton.addEventListener('click', clearResult);

displayFlag();
updateScoreDisplay(); 
