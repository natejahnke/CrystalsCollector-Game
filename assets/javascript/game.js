var wins = 0;
var losses = 0;
var targetNumber;
var totalNumber = 0;

var randomBlue;
var randomGreen;
var randomPurple;
var randomWhite;

function getRandomNumber() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
}

function genRandomGem() {
    return Math.floor(Math.random() * 11) + 1;
}

$(document).ready(function() {
    getRandomNumber();
    $("#targetBox").text(targetNumber);
    randomBlue = genRandomGem();
    randomGreen = genRandomGem();
    randomPurple = genRandomGem();
    randomWhite = genRandomGem();

    $("#blueGem").attr("data-crystalvalue", randomBlue);
    $("#greenGem").attr("data-crystalvalue", randomGreen);
    $("#purpleGem").attr("data-crystalvalue", randomPurple);
    $("#whiteGem").attr("data-crystalvalue", randomWhite);

});

$(".gem").on("click", function() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    totalNumber += crystalValue;
    console.log(totalNumber);
    $("#totalScore").html(totalNumber);

    if (totalNumber === targetNumber) {
        alert("Win!");
        wins++;
        $("#winBox").html(wins);
        getRandomNumber();
        $("#targetBox").text(targetNumber);
        totalNumber = 0;
        $("#totalScore").empty();

    } else if (totalNumber >= targetNumber) {
        alert("Lose!");
        losses++;
        $("#lossBox").html(losses);
        getRandomNumber();
        $("#targetBox").text(targetNumber);
        totalNumber = 0;
        $("#totalScore").empty();
    }
});


// $(".gem").on("click", function() {
//     totalNumber += $(this).attr("data-crystalvalue");
//     console.log(totalNumber);
//     $("#totalScore").html(totalNumber);
// });


// $("#blueGem").on("click", function() {
//     randomBlue = parseInt(randomBlue);
//     totalNumber += randomBlue;
//     $("#totalScore").html(totalNumber);
// });

// $("#greenGem").on("click", function() {
//     randomGreen = parseInt(randomGreen);
//     totalNumber += randomGreen;
//     $("#totalScore").html(totalNumber);
// });

// $("#purpleGem").on("click", function() {
//     randomPurple = parseInt(randomPurple);
//     totalNumber += randomPurple;
//     $("#totalScore").html(totalNumber);
// });

// $("#whiteGem").on("click", function() {
//     randomWhite = parseInt(randomWhite);
//     totalNumber += randomWhite;
//     $("#totalScore").html(totalNumber);
// });

// if (totalNumber === targetNumber) {
//     alert("Win!");
// } else if (totalNumber >= targetNumber) {
//     alert("Lose!");
// }