$("document").ready(function () {
    let player1 = { name: "Player1", token: "X" };
    let player2 = { name: "Player2", token: "O" };
    let board;
    let turn = "X" //P1 = X / P2 = O
    let hasWinner = ""

    $("#player1Name").text(player1.name)
    $("#player2Name").text(player2.name)
    $("#player1Token").text(player1.token)
    $("#player2Token").text(player2.token)


    start()

    $("#start").click(function(){
        start()
    });

    function start() {
        hasWinner = ""
        $("#winner").text("")
        initializeBoard();
        updateBoard();
        turnMessage();
    }

    $(".cell").click(function () {
        mark(this.id)
    })

    function mark(n) {
        let row = parseInt(n.substring(0, 1));
        let col = parseInt(n.substring(1, 2));

        if (hasWinner != "") {
            return
        }

        if (board[row][col] == "") {
            board[row][col] = turn;
            updateBoard()
            checkWinner()
            if(hasWinner == "") changeTurn()
        }
    }

    function turnMessage() {
        console.log("Turning message " + turn);

        if (turn == "X") $("#turnMessage").text("Player 1 Turn")
        else $("#turnMessage").text("Player 2 Turn")
    }

    function changeTurn() {
        console.log(turn);
        if (turn == "X") turn = "O"
        else turn = "X";
        console.log(turn);
        turnMessage();
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
            $("#turnMessage").text("Player 1 Win")
        } else if (p =="O") {
            $("#turnMessage").text("Player 2 Win")
        }
        hasWinner = p
    }

    function checkWinner() {
        if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O"
        || board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O"
        || board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O"
        || board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O"
        || board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O"
        || board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O"
        || board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O"
        || board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
        {
            winner("O")
        }

        if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X"
        || board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X"
        || board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X"
        || board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X"
        || board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X"
        || board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X"
        || board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X"
        || board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
        {
            winner("X")
        }

    }


    function updateBoard() {
        $("#00").text(board[0][0]);
        $("#01").text(board[0][1]);
        $("#02").text(board[0][2]);
        $("#10").text(board[1][0]);
        $("#11").text(board[1][1]);
        $("#12").text(board[1][2]);
        $("#20").text(board[2][0]);
        $("#21").text(board[2][1]);
        $("#22").text(board[2][2]);
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