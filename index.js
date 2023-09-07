
let player = {
    name : "per",
    price : 150
}

//Intializing player is still alive
//And he doesn't have BlackJack Card
let isAlive = false;
let hasBlackJack = false;
let message = "";
let sum = 0;
let msgEl = document.getElementById("msg");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let cards = [];
let playerEl = document.getElementById("player-el");

//Entry pass ticket price per Each
playerEl.textContent = player.name + ": $" + player.price;

//Starting a Game
function start() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard ;
    resumeGame();
}

//Getting a Random Number
function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10) {
        return 10;                       // King , Queeen value
    }
    else if (randomNumber === 1) {
        return 11;                      // Ace value in a deck of cards
    }
    else {
        return randomNumber;
    }
}

//Restarting the Game if you are out of game
function resumeGame() {
    cardEl.textContent = "Cards "
    for(let i = 0; i<cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    
    sumEl.textContent = "sum "+ sum;
    if(sum < 21) {
        message = "Do you want to draw a new card? ";
    }
    else if(sum === 21) {
        message = "You've got Blackjack ";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game ";
        isAlive = false;
    }

    msgEl.textContent = message;
}

//Continuing the Game until reach the end
//Player can take new card until isAlive is true
//And hasBlackJack is false
function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        cards.push(card);
        sum += card;
        resumeGame();
    }
}