let startPage = document.querySelector(".start-page");
let gamePage = document.querySelector(".game");
let resultPage = document.querySelector(".result-page");


let buttonStart = document.querySelector(".button-start");
let buttonRestart = document.querySelector(".button-restart");
let buttonAgain = document.querySelector(".button-again");


buttonStart.onclick = function () {
    startPage.classList.remove("is-displayed");
    gamePage.classList.add("is-displayed");
    generateCardsSet();
}

buttonRestart.onclick = function () {
    generateCardsSet();
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
    }
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

    for (let i = 0; i < 18; i++) {
        let currentCard = document.getElementById(i);
        let cardFace = currentCard.firstChild;
        cardFace.src = "Cards/" + currentGameCards[i] + ".png";
        currentCard.open();
    }
    lookCards();
}

let cardCounter = 0;
let focusCards = [];
function ClickOnCard() {
    cardCounter++;
    if (cardCounter == 1) {
        this.open();
        focusCards[0] = this;
    }
    if (cardCounter == 2) {
        this.open();
        focusCards[1] = this;
        setTimeout(compareTheCards(), 500);
    }
}

function compareTheCards() {
    if (focusCards[0].firstChild.src == focusCards[1].firstChild.src) {
        focusCards[0].style.opacity = "0";
        focusCards[1].style.opacity = "0";
    }
    else {
        focusCards[0].close();
        focusCards[1].close();
    }
    cardCounter = 0;
}

function closeTheCards() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].close();
        cards[i].onclick = ClickOnCard;
    }
}

function openTheCards() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].open();
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

function lookCards() {
    setTimeout(closeTheCards, 1500);
}

