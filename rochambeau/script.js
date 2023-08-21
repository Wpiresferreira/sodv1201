let score = { computer: 0, player: 0 }
$("#computer-score").text(score.computer)
$("#player-score").text(score.player)
$("#message").hide()

let processing = false

function select(p) {
    $("#computer-final").html("")

    if (processing) {
        return
    }
    processing = true
    $("#" + p).toggleClass("selected")
    $("#player-final").html("<img src='" + p + ".png' >")

    var interval1
    var interval2
    var interval3

    interval1 = setInterval(function () {
        $("#computer-board").html("<img src='rock.png' >")
    }, 600);
    setTimeout(function () {
        interval2 = setInterval(() => {
            $("#computer-board").html("<img src='paper.png' >")
        }, 600);
    }, 200);
    setTimeout(function () {
        interval3 = setInterval(() => {
            $("#computer-board").html("<img src='scissors.png' >")
        }, 600);
    }, 400);

    setTimeout(() => {
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
    }, 5000);

    let rand = Math.floor(Math.random() * 3)
    let computerSelect
    setTimeout(() => {
        switch (rand) {
            case 0:
                computerSelect = 'rock'
                $("#computer-board").html("<img src='rock.png' >")

                break;

            case 1:
                computerSelect = 'paper'
                $("#computer-board").html("<img src='paper.png' >")
                break;

            case 2:
                computerSelect = 'scissors'
                $("#computer-board").html("<img src='scissors.png' >")
                break;

            default:
                break;
        }
        $("#computer-final").html("<img src='" + computerSelect + ".png' >")
    }, 5000)

    setTimeout(() => {
        if (p == computerSelect) {
            $("#message").html("Tie")
            $("#message").fadeIn("slow")
        } else if (p == 'rock' && computerSelect == 'scissors' ||
            p == 'scissors' && computerSelect == 'paper' ||
            p == 'paper' && computerSelect == 'rock') {
            $("#message").html("You win")
            $("#message").fadeIn("slow")
            score.player += 1
        } else {
            $("#message").html("You lose")
            $("#message").fadeIn("slow")

            score.computer += 1
        }
        $("#computer-score").text(score.computer)
        $("#player-score").text(score.player)
    }, 5200)

    setTimeout(() => {
        $("#message").fadeOut("slow")
        processing = false
        $("#" + p).toggleClass("selected")
    }, 7200)
}

function endFunction() {

}