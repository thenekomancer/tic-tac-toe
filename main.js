document.addEventListener("DOMContentLoaded", function(event) {


var zeroZero = document.getElementById("00");
var zeroOne = document.getElementById("01");
var zeroTwo = document.getElementById("02");
var oneZero = document.getElementById("10");
var oneOne = document.getElementById("11");
var oneTwo = document.getElementById("12");
var twoZero = document.getElementById("20");
var twoOne = document.getElementById("21");
var twoTwo = document.getElementById("22");

var board = document.querySelector(".container").addEventListener('click', mark);
var count = 0;
var winMessage = document.querySelector(".win-message");
var player;


function clickCounter(){
	count++;
}

function mark(e){

	if(e.target.innerText !== "X" && e.target.innerText !== "O"){
		clickCounter();
			if(count % 2 === 0){
				e.target.innerText = "O";
				if(win()){
					winMessage.innerText = "good job you win dis, " + player;
					gameOver();
				}
			}
			else {
			e.target.innerText = "X";
				if(win()){
					winMessage.innerText = "good job you win dis, " + player;
					gameOver();
		}
	}
}
	else {
		alert('you done already clicked on dis')
}
}

function win(){
	if(count % 2 === 0) {
		player = 'O'
	} else {
		player = 'X'
	}
	if((zeroZero.innerText === player) && (zeroOne.innerText === player) && (zeroTwo.innerText === player) || 
		(oneZero.innerText === player) && (oneOne.innerText === player) && (oneTwo.innerText === player) ||
		(twoZero.innerText === player) && (twoOne.innerText === player) && (twoTwo.innerText === player) ||
		(zeroZero.innerText === player) && (oneOne.innerText === player) && (twoTwo.innerText === player) ||
		(zeroTwo.innerText === player) && (oneOne.innerText === player) && (twoZero.innerText === player) ||
		(zeroZero.innerText === player) && (oneZero.innerText === player) && (twoZero.innerText === player) ||
		(zeroOne.innerText === player) && (oneOne.innerText === player) && (twoOne.innerText === player) ||
		(zeroTwo.innerText === player) && (oneTwo.innerText === player) && (twoTwo.innerText === player)) 
	{
		return true;
	}
	return false;
}


function gameOver(){
	board = document.querySelector(".container").removeEventListener('click', mark);
}

})