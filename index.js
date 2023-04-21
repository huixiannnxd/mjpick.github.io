// Initialise
// document.addEventListener("DOMContentLoaded", setUp);

// Create starting elements
var num_array = [1, 2, 3, 4];
var option = "wind";

// Function for initialisation
var cardsBack = document.querySelectorAll(".card-back");
function setUp() {
  // Randomising winds
  resetCardBack();
  resetCard();
  assgPics();
}

// Allow for flipping of cards
var cards = document.querySelectorAll(".single-card");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", onClick);
}

// Assign pics according to randomisation
function assgPics() {
  shuffle(num_array);
  var counter = 0;
  while (counter < cardsBack.length) {
    cardsBack[counter].classList.add(option + num_array[counter]);
    counter++;
  }
}

// Button changer
var windButton = document.querySelector(".wind");
var animalButton = document.querySelector(".animal");
windButton.addEventListener("click", changeWind);
animalButton.addEventListener("click", changeAnimal);

//Function to flip cards
function onClick() {
  this.classList.toggle("flip-card");
}

// Function to shuffle num_array
function shuffle(input_array) {
  for (var i = input_array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = input_array[i];
    input_array[i] = input_array[j];
    input_array[j] = temp;
  }
}

function changeWind() {
  option = "wind";
  setUp();
}

function changeAnimal() {
  option = "animal";
  setUp();
}

function resetCard() {
  for (var i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("flip-card")) {
      cards[i].classList.remove("flip-card");
    } else {
      continue;
    }
  }
}

var imgClasses = [
  "wind1",
  "wind2",
  "wind3",
  "wind4",
  "animal1",
  "animal2",
  "animal3",
  "animal4",
];
function resetCardBack() {
  for (var i = 0; i < cardsBack.length; i++) {
    for (var j = 0; j < imgClasses.length; j++) {
      if (cardsBack[i].classList.contains(imgClasses[j])) {
        cardsBack[i].classList.remove(imgClasses[j]);
      } else {
        continue;
      }
    }
  }
}

