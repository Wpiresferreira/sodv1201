let countX = {
    row0: 0,
    row1: 0,
    row2: 0,
    col0: 0,
    col1: 0,
    col2: 0,
    dia0: 0,
    dia1: 0
}
let player1 = { name: "Player1", token: "X" };
let player2 = { name: "Player2", token: "O" };
let board;
let turn = player1 //P1 = X / P2 = O
let hasWinner = ""
let mode = "1player"
let movements = 0
let processing = false
player2.name = "Computer"
$("#1PlayerMode").hide()
$("#2PlayerMode").show()
start()


$("#start").click(function () {
    // location.reload()
    start()
});

function start() {
    initializeBoard()   
    $("#winner-line").hide();
    $("#player1Name").text(player1.name)
    $("#player1Token").text(player1.token)
    $("#player2Name").text(player2.name)
    $("#player2Token").text(player2.token)
    showMessage("Sorting who wil begin")
    if (Math.floor(Math.random() * 2) == 0) {
        turn = player1
        showMessage("Player1 will start")
    }else {
        turn = player2
        showMessage(player2.name + " will start")

    }

    hasWinner = ""

    $("#winner").text("")

    initializeBoard()
    updateBoard()
    turnMessage()
    if (turn.token == "O" && mode == "1player") {
        processing = true
        setTimeout(computerMark, 5000)
    }

}
function showMessage(msg) {
    $("#alertMessage").text(msg)
    $("#alertMessage").fadeIn()
    hideMessage()
}

function hideMessage() {
    setTimeout(function () {
        $("#alertMessage").fadeOut()
    }, 3000)
}
// setTimeout(showAlertMessage(turn.name + " turn"), 3000)
// setTimeout(hideAlertMessage(), 3000)

//     $("#alertMessage").css("z-index", "10")
//     $("#alertMessage").text("z-index 10")
//     }

// function hideAlertMessage(){
//     $("#alertMessage").css("z-index", "-10")
//     }


$("#1PlayerMode").click(function () {
    mode = "1player"
    player2.name = "Computer"
    $("#1PlayerMode").hide()
    $("#2PlayerMode").show()
    start()
})

$("#2PlayerMode").click(function () {
    mode = "2player"
    player2.name = "Player 2"
    $("#2PlayerMode").hide()
    $("#1PlayerMode").show()
    start()
})

$(".cell").click(function () {
    mark(this.id)
})

function mark(n) {
    if (processing)
        return

    //setTimeout(showAlertMessage(turn.name + " turn"), 3000)
    //setTimeout(hideAlertMessage, 3000)

    let row = parseInt(n.substring(4, 5));
    let col = parseInt(n.substring(5, 6));

    if (hasWinner != "") {
        return
    }

    if (board[row][col] == "") {
        board[row][col] = turn.token;
        updateBoard()
        checkWinner()
        movements += 1
        if (hasWinner == "") changeTurn()
    }

    if (turn.token == "O" && mode == "1player") {
        processing = true
        setTimeout(computerMark, 3000)
    }
}

function whereNeedToBlock() {
    for (const key in countX) {
        if (Object.hasOwnProperty.call(countX, key)) {
            if (countX[key] == 2) {
                return key
            };

        }
    }
    return ""
}

function whereGain() {
    for (const key in countX) {
        if (Object.hasOwnProperty.call(countX, key)) {
            if (countX[key] == -2) {
                return key
            };

        }
    }
    return ""
}

function computerMark() {
    let row
    let col
    processing = true

    letsGain = whereGain()

    letsBlock = whereNeedToBlock()
    console.log(letsBlock)

    if (letsGain != "") {
        if (letsGain.substring(0, 3) == "row") {
            row = parseInt(letsGain.substring(3, 4))
            console.log(row);


            if (board[row][0] == "") {
                col = 0
            } else if (board[row][1] == "") {
                col = 1
            } else if (board[row][2] == "") {
                col = 2
            }
        }
        if (letsGain.substring(0, 3) == "col") {
            col = parseInt(letsGain.substring(3, 4))


            if (board[0][col] == "") {
                row = 0
            } else if (board[1][col] == "") {
                row = 1
            } else if (board[2][col] == "") {
                row = 2
            }
        }
        if (letsGain.substring(0, 3) == "dia") {
            let dia = parseInt(letsGain.substring(3, 4))
            if (dia == 0) {
                if (board[0][0] == "") {
                    row = 0
                    col = 0
                } else if (board[1][1] == "") {
                    row = 1
                    col = 1
                } else if (board[2][2] == "") {
                    row = 2
                    col = 2
                }
            }
            if (dia == 1) {
                if (board[0][2] == "") {
                    row = 0
                    col = 2
                } else if (board[1][1] == "") {
                    row = 1
                    col = 1
                } else if (board[2][0] == "") {
                    row = 2
                    col = 0
                }
            }
        }

    } else if (letsBlock != "") {
        if (letsBlock.substring(0, 3) == "row") {
            row = parseInt(letsBlock.substring(3, 4))
            console.log(row);


            if (board[row][0] == "") {
                col = 0
            } else if (board[row][1] == "") {
                col = 1
            } else if (board[row][2] == "") {
                col = 2
            }
        }
        if (letsBlock.substring(0, 3) == "col") {
            col = parseInt(letsBlock.substring(3, 4))


            if (board[0][col] == "") {
                row = 0
            } else if (board[1][col] == "") {
                row = 1
            } else if (board[2][col] == "") {
                row = 2
            }
        }
        if (letsBlock.substring(0, 3) == "dia") {
            let dia = parseInt(letsBlock.substring(3, 4))
            if (dia == 0) {
                if (board[0][0] == "") {
                    row = 0
                    col = 0
                } else if (board[1][1] == "") {
                    row = 1
                    col = 1
                } else if (board[2][2] == "") {
                    row = 2
                    col = 2
                }
            }
            if (dia == 1) {
                if (board[0][2] == "") {
                    row = 0
                    col = 2
                } else if (board[1][1] == "") {
                    row = 1
                    col = 1
                } else if (board[2][0] == "") {
                    row = 2
                    col = 0
                }
            }
        }

    } else {



        let possibles = []
        let index = 0

        if (movements == 0 || (movements == 1 && board[1][1] == "")) {
            row = 1
            col = 1
        } else if (movements == 1 && board[1][1] != "") {
            row = 0
            col = 0
        } else {

            for (let row = 0; row <= 2; row++) {
                for (let col = 0; col <= 2; col++) {
                    if (board[row][col] == "") {
                        possibles[index] = row * 10 + col
                        index++
                    }
                }
            }

            let rnd = Math.floor(Math.random() * possibles.length)
            row = Math.floor(possibles[rnd] / 10)
            col = possibles[rnd] % 10
        }
    }
    board[row][col] = turn.token
    updateBoard()
    checkWinner()
    if (hasWinner == "") changeTurn()
    movements += 1
    processing = false

}
function turnMessage() {
    if (turn.token == "X") $("#turnMessage").text("Player 1 Turn")
    else $("#turnMessage").text(player2.name + " Turn")
}

function changeTurn() {
    if (turn.token == "X") turn = player2
    else turn = player1
    turnMessage()
}

function initializeBoard() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
}

function winner(p) {
    if (p == "X") {
        $("#turnMessage").text(player1.name + " Win")
    } else if (p == "O") {
        $("#turnMessage").text(player2.name + " Win")
    } else if (p == "-") {
        $("#turnMessage").text("There was a Tie")
    }
    hasWinner = p
}

function checkWinner() {
    if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O") {
        winner("O")
        $("#winner-line").fadeIn();
        return
    }
    if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
        winner("O")
        $("#winner-line").css("margin-top", "38vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
        winner("O")
        $("#winner-line").css("margin-top", "66vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
        winner("O")
        $("#winner-line").css("margin-top", "0");
        $("#winner-line").css("margin-left", "12vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "79vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
        winner("O")
        $("#winner-line").css("margin-top", "0");
        $("#winner-line").css("margin-left", "38vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "79vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
        winner("O")
        $("#winner-line").css("margin-top", "0");
        $("#winner-line").css("margin-left", "63vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "79vw");
        $("#winner-line").fadeIn();
        return

    }
    if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
        winner("O")
        $("#winner-line").css("margin-top", "20px");
        $("#winner-line").css("margin-left", "37vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "67vw");
        $("#winner-line").css("-webkit-transform", "skew(45deg)");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
        winner("O")
        $("#winner-line").css("margin-top", "20px");
        $("#winner-line").css("margin-left", "37vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "67vw");
        $("#winner-line").css("-webkit-transform", "skew(-45deg)");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        winner("X")
        $("#winner-line").fadeIn();
        return
    }
    if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "38vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "66vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "0");
        $("#winner-line").css("margin-left", "12vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "79vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "0");
        $("#winner-line").css("margin-left", "38vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "79vw");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "0");
        $("#winner-line").css("margin-left", "63vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "79vw");
        $("#winner-line").fadeIn();
        return

    }
    if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "20px");
        $("#winner-line").css("margin-left", "37vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "67vw");
        $("#winner-line").css("-webkit-transform", "skew(45deg)");
        $("#winner-line").fadeIn();
        return
    }
    if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
        winner("X")
        $("#winner-line").css("margin-top", "20px");
        $("#winner-line").css("margin-left", "37vw");
        $("#winner-line").css("width", "6px");
        $("#winner-line").css("height", "67vw");
        $("#winner-line").css("-webkit-transform", "skew(-45deg)");
        $("#winner-line").fadeIn();
        return
    }


    // if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"
    //     || board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"
    //     || board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"
    //     || board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X"
    //     || board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"
    //     || board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X"
    //     || board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"
    //     || board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
    //     winner("X")
    //     return
    // }
    let countSpaces = 0;
    board.forEach(row => {
        row.forEach(cell => {
            if (cell == "") {
                countSpaces++
            }
        })
    })
    if (countSpaces == 0) {
        winner("-")
        hasWinner = "-"
    }

}


function updateBoard() {
    $("#cell00").text(board[0][0]);
    $("#cell01").text(board[0][1]);
    $("#cell02").text(board[0][2]);
    $("#cell10").text(board[1][0]);
    $("#cell11").text(board[1][1]);
    $("#cell12").text(board[1][2]);
    $("#cell20").text(board[2][0]);
    $("#cell21").text(board[2][1]);
    $("#cell22").text(board[2][2]);
    countPossibilities()
    console.log(countX)
}

function countPossibilities() {

    for (const key in countX) {
        if (Object.hasOwnProperty.call(countX, key)) {
            countX[key] = 0;

        }
    }


    if (board[0][0] == "X") {
        countX.row0 += 1
        countX.col0 += 1
        countX.dia0 += 1
    }


    if (board[0][1] == "X") {
        countX.row0 += 1
        countX.col1 += 1
    }

    if (board[0][2] == "X") {
        countX.row0 += 1
        countX.col2 += 1
        countX.dia1 += 1
    }

    if (board[1][0] == "X") {
        countX.row1 += 1
        countX.col0 += 1
    }

    if (board[1][1] == "X") {
        countX.row1 += 1
        countX.col1 += 1
        countX.dia0 += 1
        countX.dia1 += 1
    }


    if (board[1][2] == "X") {
        countX.row1 += 1
        countX.col2 += 1
    }


    if (board[2][0] == "X") {
        countX.row2 += 1
        countX.col0 += 1
        countX.dia1 += 1
    }

    if (board[2][1] == "X") {
        countX.row2 += 1
        countX.col1 += 1
    }


    if (board[2][2] == "X") {
        countX.row2 += 1
        countX.col2 += 1
        countX.dia0 += 1
    }

    if (board[0][0] == "O") {
        countX.row0 -= 1
        countX.col0 -= 1
        countX.dia0 -= 1
    }


    if (board[0][1] == "O") {
        countX.row0 -= 1
        countX.col1 -= 1
    }

    if (board[0][2] == "O") {
        countX.row0 -= 1
        countX.col2 -= 1
        countX.dia1 -= 1
    }

    if (board[1][0] == "O") {
        countX.row1 -= 1
        countX.col0 -= 1
    }

    if (board[1][1] == "O") {
        countX.row1 -= 1
        countX.col1 -= 1
        countX.dia0 -= 1
        countX.dia1 -= 1
    }


    if (board[1][2] == "O") {
        countX.row1 -= 1
        countX.col2 -= 1
    }


    if (board[2][0] == "O") {
        countX.row2 -= 1
        countX.col0 -= 1
        countX.dia1 -= 1
    }

    if (board[2][1] == "O") {
        countX.row2 -= 1
        countX.col1 -= 1
    }


    if (board[2][2] == "O") {
        countX.row2 -= 1
        countX.col2 -= 1
        countX.dia0 -= 1
    }
}