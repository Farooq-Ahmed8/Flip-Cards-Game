let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")
let message = document.getElementById("message")
let scoreBoard = document.getElementById("scoreBoard")
let isFliped = false;
let score = 0;

function flipCard(userNumber) {
    if (!isFliped) {
    let kingNumber = Math.ceil(Math.random() * 3);
    if (kingNumber === 1) {
        img1.src = "king-card.png";
        img2.src = "joker-card.png";
        img3.src = "joker-card.png";
    } else if (kingNumber === 2) {
        img1.src = "joker-card.png";
        img2.src = "king-card.png";
        img3.src = "joker-card.png";
    } else if (kingNumber === 3) {
        img1.src = "joker-card.png";
        img2.src = "joker-card.png";
        img3.src = "king-card.png";
    }
    isFliped = true;

    if (userNumber === kingNumber) {
        message.innerHTML = "You Won!";
        score++;
    } else {
        message.innerHTML = "You Lose!";
        score--;
    }
    message.style.fontSize = "36px";
    updateScore();
}
}

function reset() {
    img1.src = "card-backside.png";
    img2.src = "card-backside.png";
    img3.src = "card-backside.png";
    isFliped = false;
    message.innerHTML = "";
}

function updateScore() {
    scoreBoard.innerHTML = "Score: " + score;
}