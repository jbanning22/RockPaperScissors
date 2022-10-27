// const choices = document.querySelectorAll(".choice");
// const score = document.getElementById("score");
const result = document.getElementById("result");

function selection1() {
    const player = document.getElementById("P1");
    const computer = document.getElementById("computer");
    player.classList = "fas fa-hand-rock selectedMove";
    const result = getComputerChoice();
    const endResult = gameCode("rock", result);
    if (result === "rock") {
        computer.classList = "fas fa-hand-rock cpu";
    } else if (result === "paper") {
        computer.classList = "fas fa-hand-paper cpu";
    } else if (result === "scissors") {
        computer.classList = "fas fa-hand-scissors cpu";
    }
}
function selection2() {
    const element = document.getElementById("P1");
    const computer = document.getElementById("computer");
    element.classList = "fas fa-hand-paper selectedMove";
    const result = getComputerChoice();
    const endResult = gameCode("paper", result);
    if (result === "rock") {
        computer.classList = "fas fa-hand-rock cpu";
    } else if (result === "paper") {
        computer.classList = "fas fa-hand-paper cpu";
    } else if (result === "scissors") {
        computer.classList = "fas fa-hand-scissors cpu";
    }
}
function selection3() {
    const element = document.getElementById("P1");
    const computer = document.getElementById("computer");
    element.classList = "fas fa-hand-scissors selectedMove";
    const result = getComputerChoice();
    const endResult = gameCode("scissors", result);
    if (result === "rock") {
        computer.classList = "fas fa-hand-rock cpu";
    } else if (result === "paper") {
        computer.classList = "fas fa-hand-paper cpu";
    } else if (result === "scissors") {
        computer.classList = "fas fa-hand-scissors cpu";
    }
}

function gameCode(P1, computer) {
    console.log(P1, computer);
    const winning = document.getElementById("result");
    if (P1 === "paper") {
        if (computer === "rock") {
            winning.innerHTML = "You win!";
        } else if (computer === "scissors") {
            winning.innerHTML = "CPU wins!";
        } else {
            winning.innerHTML = "It's a draw!";
        }
    }

    if (P1 === "scissors") {
        if (computer === "rock") {
            winning.innerHTML = "CPU wins!";
        } else if (computer === "paper") {
            winning.innerHTML = "You win!";
        } else {
            winning.innerHTML = "It's a draw!";
        }
    }

    if (P1 === "rock") {
        if (computer === "scissors") {
            winning.innerHTML = "You win!";
        } else if (computer === "paper") {
            winning.innerHTML = "CPU wins!";
        } else {
            winning.innerHTML = "It's a draw!";
        }
    }
}

function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.34) {
        return "rock";
    } else if (rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// function youWin() {
//     if ((winning.innerHTML = "You win!")) {
//         text.style.color = "red";

//     }
// } 
