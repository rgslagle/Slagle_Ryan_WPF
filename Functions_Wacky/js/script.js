/*
Ryan Slagle
June 25 2014
Functions Wacky
 */

//A ternary
//An else if
//An anonymous function
//A normal "named" function
//An expression with two arithmetic operators
//A function with three parameters.
//At least one logical operation

var winningGames = prompt("How many wins does your team have?");

while (isNaN(winningGames)|| winningGames==="") {
    minNumber = prompt("Please type in a minimum number.");
}
var lossingGames = prompt("How many losses does your team have?");
while (isNaN(lossingGames)|| lossingGames==="") {
    minNumber = prompt("Please type in a minimum number.");
}

function totalGames(){//Creating a basic function
    var wins = winningGames;//variables within the function
    var losses = lossingGames;
    var gamesPlayed = Number(wins) + Number(losses);
    console.log(gamesPlayed);
}




totalGames(Number(winningGames + lossingGames));//Invoking the function
