var start_page = document.querySelector(".start-page");
var game_page = document.querySelector(".game");
var result_page = document.querySelector(".result-page");


var button_start = document.querySelector(".button-start");
var button_restart = document.querySelector(".button-restart");
var button_again = document.querySelector(".button-again");


button_start.onclick = function () {
    start_page.classList.remove("is-displayed");
    game_page.classList.add("is-displayed");
}

button_restart.onclick = function () {
    generateCardsSet();
}

button_again.onclick = function () {
    result_page.classList.remove("is-displayed");
    game_page.classList.add("is-displayed");
}


var cards_Array = [];
var card_value = ["0", "2", "3", "4", "5", "6", "7", "8", "9", "A", "J", "K", "Q"]
var card_suit = ["C", "D", "H", "S"]

for (var i = 0; i < 13; i++) {
    for (var j = 0; j < 4; j++) {
        cards_Array[i * 4 + j] = card_value[i] + card_suit[j];
    }
}


var game_table = document.querySelector(".game_table");
for (var i = 0; i < 18; i++) {
    var newCard = document.createElement("div");
    newCard.classList.add("card", "card_face");
    newCard.id = i;
    game_table.appendChild(newCard);
    var new_card_image = document.createElement("img");
    newCard.appendChild(new_card_image);
}

start_page.classList.add("is-displayed");
generateCardsSet();

function generateCardsSet() {
    var random_cards = new Array(18);
    for (var i = 0; i < 9; i++) {
        var random_number = Math.floor(Math.random() * 52);
        random_cards[i] = cards_Array[random_number];
        random_cards[i + 9] = cards_Array[random_number];
    }
    random_value = function (a, b) {
        return Math.random() - 0.5;
    }
    var current_game_cards = random_cards.sort(random_value);

    for (var i = 0; 0 < 18; i++) {
        var current_card = document.getElementById(i);
        var card_image = current_card.firstChild;
        card_image.src = "Cards/" + current_game_cards[i] + ".png";
    }
}
