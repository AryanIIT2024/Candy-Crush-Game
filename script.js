
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
    for (let r = 0; r < row; r++) {
        let rowArr = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);
            
            // Add touch event listeners for mobile   for mobile use 
            tile.addEventListener("touchstart", touchStart);
            tile.addEventListener("touchmove", touchMove);
            tile.addEventListener("touchend", touchEnd);
            
            document.getElementById("board").append(tile);
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
    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) return;

    let tempImg = currTile.src;
    currTile.src = otherTile.src;
    otherTile.src = tempImg;
    
    setTimeout(() => {
        crushCandy();
    }, 200);
}

// Touch event handlers
function touchStart(e) {
    e.preventDefault();
    currTile = e.target;
}

function touchMove(e) {
    e.preventDefault();
    let touch = e.touches[0];
    let targetTile = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetTile && targetTile.tagName === "IMG") {
        otherTile = targetTile;
    }
}

function touchEnd(e) {
    e.preventDefault();
    if (currTile && otherTile) {
        dragEnd();
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
            if (board[r][c].src === board[r][c + 1].src && board[r][c + 1].src === board[r][c + 2].src && !board[r][c].src.includes("blank")) {
                board[r][c].src = "./images/blank.png";
                board[r][c + 1].src = "./images/blank.png";
                board[r][c + 2].src = "./images/blank.png";
                score += 5;
                crushed = true;
            }
        }
    }
    
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < row - 2; r++) {
            if (board[r][c].src === board[r + 1][c].src && board[r + 1][c].src === board[r + 2][c].src && !board[r][c].src.includes("blank")) {
                board[r][c].src = "./images/blank.png";
                board[r + 1][c].src = "./images/blank.png";
                board[r + 2][c].src = "./images/blank.png";
                score += 5;
                crushed = true;
            }
        }
    }
    
    return crushed;
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
    timerInterval = setInterval(function () {
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

