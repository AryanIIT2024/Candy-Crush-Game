// var candies = ["Blue", "Orange", "Red", "Yellow"];
// var board = [];
// var row = 9;
// var columns = 9;
// var score = 0;
// var currTile;
// var otherTile;
// var timeLeft = 60;
// var timerInterval;
// var gameStarted = false;

// window.onload = function () {
//     startGame();
// };

// function startGamePlay() {
//     score = 0;
//     document.getElementById("score").innerText = score;
//     timeLeft = 60;

//     if (!gameStarted) {
//         gameStarted = true;
//         startTimer();
//     }
// }

// function randomCandy() {
//     return candies[Math.floor(Math.random() * candies.length)];
// }

// function startGame() {
//     if (board.length > 0) return;

//     for (let r = 0; r < row; r++) {
//         let rowArr = [];
//         for (let c = 0; c < columns; c++) {
//             let tile = document.createElement("img");
//             tile.id = r.toString() + "-" + c.toString();
//             tile.src = "./images/" + randomCandy() + ".png";

//             tile.addEventListener("dragstart", dragStart);
//             tile.addEventListener("dragover", dragOver);
//             tile.addEventListener("dragenter", dragEnter);
//             tile.addEventListener("dragleave", dragLeave);
//             tile.addEventListener("drop", dragDrop);
//             tile.addEventListener("dragend", dragEnd);

//             document.getElementById("board").append(tile);
//             rowArr.push(tile);
//         }
//         board.push(rowArr);
//     }
// }

// function dragStart() {
//     if (!gameStarted) return;
//     currTile = this;
// }

// function dragOver(e) {
//     e.preventDefault();
// }

// function dragEnter(e) {
//     e.preventDefault();
// }

// function dragLeave() {}

// function dragDrop() {
//     if (!gameStarted) return;
//     otherTile = this;
// }

// function dragEnd() {
//     if (!gameStarted || !currTile || !otherTile) return;
//     if (currTile.src.includes("blank") || otherTile.src.includes("blank")) return;

//     let currCoords = currTile.id.split("-");
//     let r = parseInt(currCoords[0]);
//     let c = parseInt(currCoords[1]);
//     let otherCoords = otherTile.id.split("-");
//     let r2 = parseInt(otherCoords[0]);
//     let c2 = parseInt(otherCoords[1]);

//     let isAdjacent = (c2 === c - 1 && r === r2) || (c2 === c + 1 && r === r2) || (r2 === r - 1 && c === c2) || (r2 === r + 1 && c === c2);

//     if (isAdjacent) {
//         let tempImg = currTile.src;
//         currTile.src = otherTile.src;
//         otherTile.src = tempImg;

//         if (!checkValid()) {
//             tempImg = currTile.src;
//             currTile.src = otherTile.src;
//             otherTile.src = tempImg;
//         } else {
//             crushCandy();
//             setTimeout(() => {
//                 slideCandy();
//                 generateCandy();
//             }, 200);
//         }
//     }
// }

// function crushCandy() {
//     if (!gameStarted) return;
//     let crushed = crushThree();
//     if (crushed) {
//         document.getElementById("score").innerText = score;
//         setTimeout(() => {
//             slideCandy();
//             generateCandy();
//         }, 300);
//     }
// }

// function crushThree() {
//     let crushed = false;

//     for (let r = 0; r < row; r++) {
//         for (let c = 0; c < columns - 2; c++) {
//             let candy1 = board[r][c];
//             let candy2 = board[r][c + 1];
//             let candy3 = board[r][c + 2];
//             if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
//                 candy1.src = "./images/blank.png";
//                 candy2.src = "./images/blank.png";
//                 candy3.src = "./images/blank.png";
//                 score += 5;
//                 crushed = true;
//             }
//         }
//     }

//     for (let c = 0; c < columns; c++) {
//         for (let r = 0; r < row - 2; r++) {
//             let candy1 = board[r][c];
//             let candy2 = board[r + 1][c];
//             let candy3 = board[r + 2][c];
//             if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
//                 candy1.src = "./images/blank.png";
//                 candy2.src = "./images/blank.png";
//                 candy3.src = "./images/blank.png";
//                 score += 5;
//                 crushed = true;
//             }
//         }
//     }

//     return crushed;
// }

// function checkValid() {
//     for (let r = 0; r < row; r++) {
//         for (let c = 0; c < columns - 2; c++) {
//             if (board[r][c].src === board[r][c + 1].src && board[r][c + 1].src === board[r][c + 2].src && !board[r][c].src.includes("blank")) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function slideCandy() {
//     if (!gameStarted) return;
//     for (let c = 0; c < columns; c++) {
//         let ind = row - 1;
//         for (let r = row - 1; r >= 0; r--) { 
//             if (!board[r][c].src.includes("blank")) {
//                 board[ind][c].src = board[r][c].src;
//                 ind -= 1;
//             }
//         }
//         for (let r = ind; r >= 0; r--) {
//             board[r][c].src = "./images/blank.png";
//         }
//     }
// }

// function generateCandy() {
//     if (!gameStarted) return;
//     for (let c = 0; c < columns; c++) {
//         for (let r = 0; r < row; r++) {
//             if (board[r][c].src.includes("blank")) {
//                 board[r][c].src = "./images/" + randomCandy() + ".png";
//             }
//         }
//     }
// }

// function startTimer() {
//     timerInterval = setInterval(function () {
//         document.getElementById("timer").innerText = timeLeft;
//         timeLeft--;
//         if (timeLeft < 0) {
//             clearInterval(timerInterval);
//             endGame();
//         }
//     }, 1000);
// }

// function endGame() {
//     alert("Time's up! Game Over. Your final score is: " + score);
//     gameStarted = false;
// }
var candies = ["Blue", "Orange", "Red", "Yellow"];
var board = [];
var row = 9;
var columns = 9;
var score = 0;
var currTile;
var otherTile;
var timeLeft = 60;
var timerInterval;
var gameStarted = false;

window.onload = function () {
    startGame();
    makeResponsive();
};

function startGamePlay() {
    score = 0;
    document.getElementById("score").innerText = score;
    timeLeft = 60;

    if (!gameStarted) {
        gameStarted = true;
        startTimer();
    }
}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)];
}

function startGame() {
    if (board.length > 0) return;

    let boardElement = document.getElementById("board");
    boardElement.innerHTML = "";

    for (let r = 0; r < row; r++) {
        let rowArr = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r + "-" + c;
            tile.src = "./images/" + randomCandy() + ".png";

            tile.setAttribute("draggable", true);
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            tile.addEventListener("touchstart", touchStart);
            tile.addEventListener("touchmove", touchMove);
            tile.addEventListener("touchend", touchEnd);

            boardElement.appendChild(tile);
            rowArr.push(tile);
        }
        board.push(rowArr);
    }
}

function dragStart() {
    if (!gameStarted) return;
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    if (!gameStarted) return;
    otherTile = this;
}

function dragEnd() {
    if (!gameStarted || !currTile || !otherTile) return;
    swapTiles();
}

function touchStart(e) {
    if (!gameStarted) return;
    currTile = e.target;
}

function touchMove(e) {
    e.preventDefault();
    let touch = e.touches[0];
    let element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element && element.tagName === "IMG") {
        otherTile = element;
    }
}

function touchEnd() {
    if (!gameStarted || !currTile || !otherTile) return;
    swapTiles();
}

function swapTiles() {
    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) return;
    
    let tempImg = currTile.src;
    currTile.src = otherTile.src;
    otherTile.src = tempImg;
    
    if (!checkValid()) {
        tempImg = currTile.src;
        currTile.src = otherTile.src;
        otherTile.src = tempImg;
    } else {
        crushCandy();
        setTimeout(() => {
            slideCandy();
            generateCandy();
        }, 200);
    }
}

function crushCandy() {
    let crushed = crushThree();
    if (crushed) {
        document.getElementById("score").innerText = score;
        setTimeout(() => {
            slideCandy();
            generateCandy();
        }, 300);
    }
}

function crushThree() {
    let crushed = false;
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c + 1];
            let candy3 = board[r][c + 2];
            if (candy1.src === candy2.src && candy2.src === candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 5;
                crushed = true;
            }
        }
    }
    return crushed;
}

function checkValid() {
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < columns - 2; c++) {
            if (board[r][c].src === board[r][c + 1].src && board[r][c + 1].src === board[r][c + 2].src && !board[r][c].src.includes("blank")) {
                return true;
            }
        }
    }
    return false;
}

function slideCandy() {
    for (let c = 0; c < columns; c++) {
        let ind = row - 1;
        for (let r = row - 1; r >= 0; r--) {
            if (!board[r][c].src.includes("blank")) {
                board[ind][c].src = board[r][c].src;
                ind -= 1;
            }
        }
        for (let r = ind; r >= 0; r--) {
            board[r][c].src = "./images/blank.png";
        }
    }
}

function generateCandy() {
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < row; r++) {
            if (board[r][c].src.includes("blank")) {
                board[r][c].src = "./images/" + randomCandy() + ".png";
            }
        }
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        document.getElementById("timer").innerText = timeLeft;
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    alert("Time's up! Game Over. Your final score is: " + score);
    gameStarted = false;
}

function makeResponsive() {
    document.getElementById("board").style.width = "90vw";
    document.getElementById("board").style.height = "90vw";
    document.querySelectorAll("#board img").forEach(img => {
        img.style.width = "10vw";
        img.style.height = "10vw";
    });
}


