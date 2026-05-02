let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

const h2 = document.querySelector("h2");
const body = document.querySelector("body");

const btns = ["yellow", "red", "purple", "green"];

// Start Game
document.addEventListener("keypress", () => {
    if (!started) {
        started = true;
        levelup();
    }
});

// Flash effects
function flash(btn, className) {
    btn.classList.add(className);
    setTimeout(() => btn.classList.remove(className), 250);
}

// Level up
function levelup() {
    userseq = []; 

    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`#${randColor}`);

    gameseq.push(randColor);

    flash(randBtn, "flash");
}

// Check answer
function checkans(idx) {
    if (userseq[idx] === gameseq[idx]) {

        // full sequence matched
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 800);
        }

    } else {
        gameOver();
    }
}

// Button click
function btnpress() {
    let btn = this;
    let userColor = btn.getAttribute("id");

    userseq.push(userColor);

    flash(btn, "userflash");

    checkans(userseq.length - 1);
}

// Add event listeners
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(btn => {
    btn.addEventListener("click", btnpress);
});

// Game Over
function gameOver() {
    h2.innerHTML = `Game Over! Your score: <b>${level}</b><br>Press any key to restart`;

    body.classList.add("game-over");

    setTimeout(() => {
        body.classList.remove("game-over");
    }, 200);

    reset();
}

// Reset game
function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}