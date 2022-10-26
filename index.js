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
            winning.innerHTML = "paper wins";
        } else if (computer === "scissors") {
            winning.innerHTML = "scissors wins";
        } else {
            winning.innerHTML = "It's a tie!";
        }
    }

    if (P1 === "scissors") {
        if (computer === "rock") {
            winning.innerHTML = "rock wins";
        } else if (computer === "paper") {
            winning.innerHTML = "scissors wins";
        } else {
            winning.innerHTML = "It's a tie!";
        }
    }

    if (P1 === "rock") {
        if (computer === "scissors") {
            winning.innerHTML = "rock wins";
        } else if (computer === "paper") {
            winning.innerHTML = "paper wins";
        } else {
            winning.innerHTML = "It's a tie!";
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
//   function getWinner(p, c) {
//     if (p === c) {
//       return 'draw';
//     } else if (p === 'rock') {
//       if (c === 'paper') {
//         return 'computer';
//       } else {
//         return 'player';
//       }
//     } else if (p === 'paper') {
//       if (c === 'scissors') {
//         return 'computer';
//       } else {
//         return 'player';
//       }
//     } else if (p === 'scissors') {
//       if (c === 'rock') {
//         return 'computer';
//       } else {
//         return 'player';
//       }
//     }
//   }
// // function play(e) {
// //     const playerChoice = e.target.id;
// //     const computerChoice = getComputerChoice();
// //     const winner = getWinner(playerChoice, computerChoice);
// //     showWinner(winner, computerChoice);
// }
