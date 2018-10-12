$(document).ready(function () {
    ;

    var startNumber;

    function getStartNumber() {
        startNumber = Math.floor(Math.random() * (121 - 18)) + 18;
        console.log(startNumber);
    }

    var buttonNumbs = [];

    function getBtnNumbers() {
        buttonNumbs = [];
        while (buttonNumbs.length < 4) {
            var randomNumber = Math.floor(Math.random() * (12 - 0)) + 1;
            if (buttonNumbs.indexOf(randomNumber) > -1) continue;
            buttonNumbs[buttonNumbs.length] = randomNumber;

            console.log(buttonNumbs);
        }
    }

    var scoreNum = 0
    var scoreLine = $("#score").text("Score: " + scoreNum);
    var winsNum = 0;
    var winsLine = $("#wins").text("Wins: " + winsNum);
    var lossesNum = 0
    var lossesLine = $("#losses").text("Losses: " + lossesNum);

    function start() {
        getStartNumber();
        getBtnNumbers();
        $("#startNumber").text("Your Number: " + startNumber)
    }

    function winCondition() {
        if (scoreNum === startNumber) {
            winsNum++;
            winsLine = $("#wins").text("Wins: " + winsNum);
            scoreNum = 0
            scoreLine = $("#score").text("Score: " + scoreNum);
            start();
        }
    }

    function lossContition() {
        if (scoreNum > startNumber) {
            lossesNum++;
            lossesLine = $("#losses").text("Losses: " + lossesNum);
            scoreNum = 0
            scoreLine = $("#score").text("Score: " + scoreNum);
            start();
        }
    }

    function reset() {
        scoreNum = 0
        scoreLine = $("#score").text("Score: " + scoreNum);
        winsNum = 0;
        winsLine = $("#wins").text("Wins: " + winsNum);
        lossesNum = 0
        lossesLine = $("#losses").text("Losses: " + lossesNum);
        startNumber = "";
        buttonNumbs = [];
    }

    $("#startBtn").click(start);

    $("#btn1").click(function () {
        scoreNum = scoreNum + buttonNumbs[0]
        console.log(scoreNum)
        scoreLine = $("#score").text("Score: " + scoreNum);
        winCondition()
        lossContition()
    })
    $("#btn2").click(function () {
        scoreNum = scoreNum + buttonNumbs[1]
        console.log(scoreNum)
        scoreLine = $("#score").text("Score: " + scoreNum);
        winCondition()
        lossContition()
    })
    $("#btn3").click(function () {
        scoreNum = scoreNum + buttonNumbs[2]
        console.log(scoreNum)
        scoreLine = $("#score").text("Score: " + scoreNum);
        winCondition()
        lossContition()
    })
    $("#btn4").click(function () {
        scoreNum = scoreNum + buttonNumbs[3]
        console.log(scoreNum)
        scoreLine = $("#score").text("Score: " + scoreNum);
        winCondition()
        lossContition()
    })

    $("#rstBtn").click(reset);




});