$("document").ready(function () {
    let player1 = { name: "Player1", token: "X" };
    let player2 = { name: "Player2", token: "O" };
    let board;
    let turn = player1 //P1 = X / P2 = O
    let hasWinner = ""
    let mode = "2player"
    //player2.name = "Computer"
    $("#1PlayerMode").hide()
    $("#2PlayerMode").show()
    start()


    $("#start").click(function () {
        start()
    });

    function start() {
        $("#winner-line").fadeOut();
        $("#player1Name").text(player1.name)
        $("#player1Token").text(player1.token)
        $("#player2Name").text(player2.name)
        $("#player2Token").text(player2.token)
      //  if (Math.floor(Math.random() * 2) == 0) {
//    turn = player1
// }
// else 
        // turn = player2 }
        // showMessage("Choosing 1st Player")
     // hideMessage()
        //setTimeout(showMessage(turn.name + " will start."), 100000)
       // hideMessage()

        hasWinner = ""

        //        $("#winner").text("")

        initializeBoard()
        updateBoard()
        turnMessage()
        if (turn.token == "O" && mode == "1player") {
            setTimeout(computerMark, 5000)
        }
    }

     function showMessage(msg){
            $("#alertMessage").text(msg)
            $("#alertMessage").fadeIn()
    }

    function hideMessage(){
        setTimeout(function () {
            $("#alertMessage").fadeOut()
        }, 5000)
    }
        // setTimeout(showAlertMessage(turn.name + " turn"), 3000)
        // setTimeout(hideAlertMessage(), 3000)

    //     $("#alertMessage").css("z-index", "10")
    //     $("#alertMessage").text("z-index 10")
    //     }

    // function hideAlertMessage(){
    //     $("#alertMessage").css("z-index", "-10")
    //     }


 //   $("#1PlayerMode").click(function () {
       // mode = "1player"
        //player2.name = "Computer"
        //$("#1PlayerMode").hide()
        //$("#2PlayerMode").show()
        //start()
    //})

    //$("#2PlayerMode").click(function () {
        //mode = "2player"
        //player2.name = "Player 2"
        //$("#2PlayerMode").hide()
        //$("#1PlayerMode").show()
        //start()
    //})

    $(".cell").click(function () {
        mark(this.id)
    })

    function mark(n) {


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
            if (hasWinner == "") changeTurn()
        }

        if (turn.token == "O" && mode == "1player") {
            setTimeout(computerMark, 3000)
        }
    }

    function computerMark() {
        let possibles = []
        let index = 0
        for (let row = 0; row <= 2; row++) {
            for (let col = 0; col <= 2; col++) {
                if (board[row][col] == "") {
                    possibles[index] = row * 10 + col
                    index++
                }
            }
        }

        let rnd = Math.floor(Math.random() * possibles.length)
        let row = Math.floor(possibles[rnd] / 10)
        let col = possibles[rnd] % 10
        board[row][col] = turn.token
        updateBoard()
        checkWinner()
        if (hasWinner == "") changeTurn()
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
        if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"){
        winner("O")
        $("#winner-line").fadeIn();
        return
        }
        if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"){
            winner("O")
            $("#winner-line").css("margin-top", "38vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"){
            winner("O")
            $("#winner-line").css("margin-top", "66vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"){
            $("#winner-line").css("margin-top", "0");
            $("#winner-line").css("margin-left", "12vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "79vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"){
            $("#winner-line").css("margin-top", "0");
            $("#winner-line").css("margin-left", "38vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "79vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"){
            $("#winner-line").css("margin-top", "0");
            $("#winner-line").css("margin-left", "63vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "79vw");
            $("#winner-line").fadeIn();
            return
            
        }
        if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"){           
            $("#winner-line").css("margin-top", "20px");
            $("#winner-line").css("margin-left", "37vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "67vw");
            $("#winner-line").css("-webkit-transform", "skew(45deg)");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
            $("#winner-line").css("margin-top", "20px");
            $("#winner-line").css("margin-left", "37vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "67vw");
            $("#winner-line").css("-webkit-transform", "skew(-45deg)");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"){
        winner("X")
        $("#winner-line").fadeIn();
        return
        }
        if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"){
            winner("X")
            $("#winner-line").css("margin-top", "38vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"){
            winner("X")
            $("#winner-line").css("margin-top", "66vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X"){
            $("#winner-line").css("margin-top", "0");
            $("#winner-line").css("margin-left", "12vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "79vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"){
            $("#winner-line").css("margin-top", "0");
            $("#winner-line").css("margin-left", "38vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "79vw");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X"){
            $("#winner-line").css("margin-top", "0");
            $("#winner-line").css("margin-left", "63vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "79vw");
            $("#winner-line").fadeIn();
            return
            
        }
        if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"){           
            $("#winner-line").css("margin-top", "20px");
            $("#winner-line").css("margin-left", "37vw");
            $("#winner-line").css("width", "6px");
            $("#winner-line").css("height", "67vw");
            $("#winner-line").css("-webkit-transform", "skew(45deg)");
            $("#winner-line").fadeIn();
            return
        }
        if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
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
    }



    // $("#hide-button").click(function(){
    //     $("#test").hide();
    // });

    // $("#show-button").click(function(){
    //     $("p").show();
    // });

    // $("#toggle-button").click(function(){
    //     $("p").toggle();
    // });

    // $("p").click(function(){
    //     $(this).hide();
    // });

    // $("p").hover(function(){
    //     $(this).hide();
    // }, function(){
    //     $(this).show();
    // });

    // $("input").focus(function(){
    //     $(this).css("background-color", "yellow")
    // });

    // $("input").blur(function(){
    //     $(this).css("background-color", "green")
    // });

    // $("#move").click(function(){
    //     $("#animated").animate({left:'250px'})
    // });

    // $("h1").hover(function(){
    //     $("h1").hide("slow")
    // });

    // $("#show-text").click(function(){
    //     $("#output").text("Text: " + $("#view").text())
    // });

    // $("#show-HTML").click(function(){
    //     $("#output").html("<p>Plus1</p><p>Plus2</p>")
    // });



});

