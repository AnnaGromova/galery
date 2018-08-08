let startPage = document.querySelector(".start-page");
let gamePage = document.querySelector(".game");
let resultPage = document.querySelector(".result-page");


let buttonStart = document.querySelector(".button-start");
let buttonRestart = document.querySelector(".button-restart");
let buttonAgain = document.querySelector(".button-again");


buttonStart.onclick = function () {
    startPage.classList.remove("is-displayed");
    gamePage.classList.add("is-displayed");
    lookCards();
}

buttonRestart.onclick = function () {
    generateCardsSet();
    lookCards();
}

buttonAgain.onclick = function () {
    resultPage.classList.remove("is-displayed");
    gamePage.classList.add("is-displayed");
}

let cardsArray = [];
function createAllCards() {
    let cardValue = ["0", "2", "3", "4", "5", "6", "7", "8", "9", "A", "J", "K", "Q"]
    let cardSuit = ["C", "D", "H", "S"]

    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 4; j++) {
            cardsArray[i * 4 + j] = cardValue[i] + cardSuit[j];
        }
    }
}

createAllCards();
createTable();
startPage.classList.add("is-displayed");
generateCardsSet();

function createTable() {
    let gameTable = document.querySelector(".game-table ul");
    for (let i = 0; i < 18; i++) {
        let newCard = document.createElement("li");
        newCard.classList.add("card");
        newCard.id = i;
        gameTable.appendChild(newCard);
        let newCardFace = document.createElement("img");
        newCardFace.classList = "face";
        newCard.appendChild(newCardFace);
        let newCardBack = document.createElement("img");
        newCardBack.classList = "back";
        newCardBack.src = "Cards/back.png";
        newCard.appendChild(newCardBack);
        newCard.close = CloseCard;
        newCard.open = OpenCard;
        newCard.onclick = newCard.open;
    }
}

function closeTheCards() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].close();
    }
}

function openTheCards() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].open();
    }
}

function lookCards() {
    setTimeout(closeTheCards, 1500);
}

function generateCardsSet() {
    let randomCards = new Array(18);
    for (let i = 0; i < 9; i++) {
        let randomNumber = Math.floor(Math.random() * 52);
        randomCards[i] = cardsArray[randomNumber];
        randomCards[i + 9] = cardsArray[randomNumber];
    }
    randomValue = function (a, b) {
        return Math.random() - 0.5;
    }
    let currentGameCards = randomCards.sort(randomValue);

    for (let i = 0; 0 < 18; i++) {
        let currentCard = document.getElementById(i);
        let cardFace = currentCard.firstChild;
        cardFace.src = "Cards/" + currentGameCards[i] + ".png";
        currentCard.open();
    }
}

function CloseCard() {
    this.classList.remove("card-face");
    this.classList.add("card-back");
}

function OpenCard() {
    this.classList.remove("card-back");
    this.classList.add("card-face");
}
