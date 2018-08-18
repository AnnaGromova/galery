let startPage = document.querySelector(".start-page");
let gamePage = document.querySelector(".game");
let endPage = document.querySelector(".result-page");


let buttonStart = document.querySelector(".button-start");
let buttonRestart = document.querySelector(".button-restart");
let buttonAgain = document.querySelector(".button-again");


class card {

    constructor(id, name, back) {
        this.id = id;
        this.name = name;
        this.back = back;
        this.active = active;
        this.condition = cardFace;
    }

    open() {
        this.condition = cardFace;
    }

    close() {
        this.condition = cardBack;
    }

    
}

buttonStart.onclick = function () {
    startPage.classList.remove("is-displayed");
    gamePage.classList.add("is-displayed");
    generateCardsSet();
}

buttonRestart.onclick = function () {
    generateCardsSet();
}

buttonAgain.onclick = function () {
    endPage.classList.remove("is-displayed");
    gamePage.classList.add("is-displayed");
    generateCardsSet();
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
    let gameTable = document.querySelector(".game-table");
    for (let i = 0; i < 18; i++) {
        let newCard = document.createElement("div");
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
    let check = document.getElementById("check");
    check.innerHTML = 0;
    pairsInTable = 9;

    randomValue = function (a, b) {
        return Math.random() - 0.5;
    }
    let randomCards = cardsArray.sort(randomValue);
    let currentGameCards = new Array(18);
    for (let i = 0; i < 9; i++) {
        currentGameCards[i] = randomCards[i];
        currentGameCards[i + 9] = randomCards[i];
    }
    currentGameCards.sort(randomValue);

    for (let i = 0; i < 18; i++) {
        let currentCard = document.getElementById(i);
        currentCard.style.opacity = 1;
        let cardFace = currentCard.firstChild;
        cardFace.src = "Cards/" + currentGameCards[i] + ".png";
        currentCard.open();
    }
    lookCards();
}

let pairsInTable = 9;
let cardCounter = 0;
let focusCards = [];

function clickOnCard() {
    if (cardCounter == 0) {
        this.open();
        focusCards[0] = this;
    }
    if (cardCounter == 1) {
        if (this.classList.contains("card-face")) return;
        this.open();
        focusCards[1] = this;
        setTimeout(compareTheCards, 1000);
    }
    cardCounter++;
}

function compareTheCards() {
    let check = document.getElementById("check");
    if (focusCards[0].id != focusCards[1].id && focusCards[0].firstChild.src === focusCards[1].firstChild.src) {
        focusCards[0].style.opacity = "0";
        focusCards[1].style.opacity = "0";
        pairsInTable--;
        check.innerHTML = Number(check.innerHTML) + 42 * pairsInTable;
        if (pairsInTable == 0)
            showEndPage();
    }
    else {
        focusCards[0].close();
        focusCards[1].close();
        check.innerHTML = check.innerHTML <= 42 * pairsInTable ? 0 : check.innerHTML - 42 * pairsInTable;
    } 
    cardCounter = 0;
}

function showEndPage() {
    let check = document.getElementById("check");
    let resultCheck = document.getElementById("result-check");
    resultCheck.innerHTML = check.innerHTML;
    gamePage.classList.remove("is-displayed");
    endPage.classList.add("is-displayed");
}

function closeTheCards() {
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].close();
        cards[i].onclick = clickOnCard;
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
    setTimeout(closeTheCards, 5000);
}

