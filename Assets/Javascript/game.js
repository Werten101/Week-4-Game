// variables

var wins = 0;
var losses = 0;
var playerNumber = 0;

var gem1Number = Math.floor((Math.random() * 11) +1);
var gem2Number = Math.floor((Math.random() * 11) +1);
var gem3Number = Math.floor((Math.random() * 11) +1);
var gem4Number = Math.floor((Math.random() * 11) +1);

// generator for the number to guess

var randomNumber = Math.floor((Math.random() * 102) + 19);

//displays wins and losses

$("#WinCount").text("Wins: " + wins);
$("#LoseCount").text("Losses: " + losses);

//displays the random number in its spot

$("#Random-Number").text(randomNumber);

//displays the player score in its spot

$("#ScoreDisplay").text(playerNumber);

//Click events for gems

$("#Gem1").click(function(){
	playerNumber = playerNumber + gem1Number;
	$("#ScoreDisplay").text(playerNumber);
});

$("#Gem2").click(function(){
	playerNumber = playerNumber + gem2Number;
	$("#ScoreDisplay").text(playerNumber);
});

$("#Gem3").click(function(){
	playerNumber = playerNumber + gem3Number;
	$("#ScoreDisplay").text(playerNumber);
});

$("#Gem4").click(function(){
	playerNumber = playerNumber + gem4Number;
	$("#ScoreDisplay").text(playerNumber);
});


//game rules

$("body").click(function(){
	if(playerNumber === randomNumber){
		alert("You Won!");
		wins++;
		$("#WinCount").text("Wins: " + wins);
		$("#LoseCount").text("Losses: " + losses);
		randomNumber = Math.floor((Math.random() * 102) + 19);
		$("#Random-Number").text(randomNumber);
		playerNumber = 0;
		$("#ScoreDisplay").text(playerNumber);

	};
	if(playerNumber > randomNumber){
		alert("You Lost!");
		losses++;
		$("#WinCount").text("Wins: " + wins);
		$("#LoseCount").text("Losses: " + losses);
		randomNumber = Math.floor((Math.random() * 102) + 19);
		$("#Random-Number").text(randomNumber);
		playerNumber = 0;
		$("#ScoreDisplay").text(playerNumber);

	};
	
});