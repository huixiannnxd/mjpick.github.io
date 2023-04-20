// Initialise
document.addEventListener("DOMContentLoaded", setUp);

// Function for initialisation
var cardsBack = document.querySelectorAll(".card-back");
function setUp() {
  // Randomising winds
  var num_array = [1, 2, 3, 4];
  shuffle(num_array);
  console.log(num_array);
  // Assigning pics according to randomisation
  var counter = 0;
  while (counter < cardsBack.length) {
    cardsBack[counter].classList.add("img" + num_array[counter]);
    counter++;
  }
}

// Flipping of cards
var cards = document.querySelectorAll(".single-card");

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", onClick);
}

function onClick() {
  this.classList.toggle("flip-card");
}

function shuffle(input_array) {
  for (var i = input_array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = input_array[i];
    input_array[i] = input_array[j];
    input_array[j] = temp;
  }
}
