var wins = 0;
var losses = 0;
var randomNumber;
var totalNumber;

var randomBlue;
var randomGreen;
var randomPurple;
var randomDiamond;

function getRandomNumber() {
    randomNumber = Math.floor(Math.random() * 46) + 15;
}

function genRandomGem() {
    return Math.floor(Math.random() * 23) + 1;

}



$(document).ready(function () {
    getRandomNumber();
    $("#randBox").text(randomNumber);
    randomBlue = genRandomGem();
    randomGreen = genRandomGem();
    randomPurple = genRandomGem();
    randomDiamond = genRandomGem();

});