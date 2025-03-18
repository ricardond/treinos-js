var cards = document.querySelectorAll(".card");
var flippedCards = [];
var score = 0;
var playerTurn = true;

function checkMatch() {
    if (flippedCards.length === 2) {
        let [card1, card2] = flippedCards;
        if (card1.dataset.value === card2.dataset.value) {
            setTimeout(() => {
                alert("Acertou! Pontuação: " + (++score));
                flippedCards = [];
            }, 500);
        } else {
            setTimeout(() => {
                alert("Errou! Vez do adversário.");
                flipBack(card1);
                flipBack(card2);
                flippedCards = [];
                playerTurn = !playerTurn;
            }, 1000);
        }
    }
}

function flipBack(card) {
    let content = card.querySelector(".content");
    content.innerHTML = "Verso";
    content.style.color = "white";
    card.style.background = "rgb(0, 34, 31)";
    card.classList.remove("flipped");
}

cards.forEach(card => {
    card.addEventListener("click", () => {
        if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
            let content = card.querySelector(".content");
            content.innerHTML = card.dataset.value;
            content.style.color = "black";
            card.style.background = "rgb(167, 241, 235)";
            card.classList.add("flipped");
            flippedCards.push(card);
            checkMatch();
        }
    });
});