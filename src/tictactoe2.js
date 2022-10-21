var board = {
	0: "&nbsp;&nbsp;&nbsp;",
	1: "&nbsp;&nbsp;&nbsp;",
	2: "&nbsp;&nbsp;&nbsp;",
	3: "&nbsp;&nbsp;&nbsp;",
	4: "&nbsp;&nbsp;&nbsp;",
	5: "&nbsp;&nbsp;&nbsp;",
	6: "&nbsp;&nbsp;&nbsp;",
	7: "&nbsp;&nbsp;&nbsp;",
	8: "&nbsp;&nbsp;&nbsp;"
};

function game(event){
	var winnerType = "Human";
	var aI = false;
	var won;
	var player;
	var turnCount = boardCount(board);
	if (winner(board)||
		document.getElementById("noCyborgs").checked === false &&
		document.getElementById("oneCyborg").checked === false){
		return;
	}

	if (turnCount >= 0){
		if (radioSelectors()){
			player = twoHumans(event, turnCount);
		}else{
			player = oneHuman(event, turnCount);
		}	
	}
		
	showBoard(board);
	
	if (!radioSelectors()){
		if (player === "X"){
			aI = true;
		}else{
			winnerType = "Computer";
			aI = false;
		}
	}
	won = winner(board);

	if (won){
		aI = false;
		var winMessage = (winnerType + " player " + player + " has won this round.");
		document.getElementById("gameResult").textContent = winMessage;
		
	} else if (turnCount < 0){
		document.getElementById("gameResult").textContent = "This round is a draw.";
	}

	if (aI){
		game(event);
	}
}

function rCD(first, second, third){
	return function(){ return board[first] + board[second] + board[third];};
}

function boardCount(board){
	counter = -1;
	for(var cell in board){
		if (board[cell] === "&nbsp;&nbsp;&nbsp;"){
			counter++;
		}
	}
	return counter;
}

function radioSelectors(){
	return document.playerSelect.mode[0].checked;
}

function twoHumans(event, turnCount){
	if (board[event.target.id] !== "&nbsp;&nbsp;&nbsp;"){
		return;
	}
	if (turnCount%2 === 0){
		player = "X";
		board[event.target.id] = player;
	}else {
		player = "O";
		board[event.target.id] = player;
	}
	return player;
}

function oneHuman(event, turnCount){
	if (turnCount%2 === 0){
		if (board[event.target.id] !== "&nbsp;&nbsp;&nbsp;"){
			return;
		}
		player = "X";
		board[event.target.id] = player;
	}else {
		var aTR = aIBrains();
		var r1 = Math.floor(Math.random() * 9);
		document.getElementById("gameResult").textContent = "atr : " + aTR + " r1: " + r1;
		player = "O";
		var cellLoc = (aTR[0] || r1);
		if (board[cellLoc] === "&nbsp;&nbsp;&nbsp;"){
			board[cellLoc] = player;
		} else {
			oneHuman(event, turnCount);
		}
	}
	return player;
}

function showBoard(board){
	for(var cell in board){
		if(board[cell] !== "&nbsp;&nbsp;&nbsp;"){
			document.getElementById(cell).textContent = board[cell];
		}
	}
}

function aIBrains(board){
	var arrayTest = [];
	var rCDIndexed = [rCD(0, 1, 2), rCD(3, 4, 5), rCD(6, 7, 8), rCD(0, 3, 6), rCD(1, 4, 7), rCD(2, 5, 8), rCD(0, 4, 8), rCD(2, 4, 6)];
	var cellGroups = [   [0, 1, 2],    [3, 4, 5],    [6, 7, 8],    [0, 3, 6],    [1, 4, 7],    [2, 5, 8],    [0, 4, 8],    [2, 4, 6]];
	function numXs (cops){
		return (cops().match(/X/g) || []).length;
	}
	
	// function numOs (robbers){
		// return (robbers().match(/O/g) || []).length;
	// }
	
	
	for (var i = 0; i < rCDIndexed.length; i++){
		// // check for block
		// // if row/col/dia contains 2 X's and is not length 3 (indicating a third X or an O, even though a third X would be a win...)
		if (numXs(rCDIndexed[i]) === 2 && rCDIndexed[i]().length != 3){
			var blank = rCDIndexed[i]().match(/&nbsp;&nbsp;&nbsp;/).index;
			arrayTest.push(cellGroups[i][blank]);
		}
		// check if block wins
		// if (numOs(rCDIndexed[i]) === 2 && rCDIndexed[i]().length != 3){
			// if (rCDIndexed[i]().match(/&nbsp;&nbsp;&nbsp;/).index)
		// }
	}
	
	// check for win
	return arrayTest;
}

function winner(board){	
	if ( (rCD(0, 1, 2)() === "XXX" || rCD(3, 4, 5)() === "XXX" || rCD(6, 7, 8)() === "XXX") ||
		 (rCD(0, 1, 2)() === "OOO" || rCD(3, 4, 5)() === "OOO" || rCD(6, 7, 8)() === "OOO") ){
		return true; // left-right win
	}
	if ( (rCD(0, 3, 6)() === "XXX" || rCD(1, 4, 7)() === "XXX" || rCD(2, 5, 8)() === "XXX") ||
		 (rCD(0, 3, 6)() === "OOO" || rCD(1, 4, 7)() === "OOO" || rCD(2, 5, 8)() === "OOO") ){
		return true; // up-down win
	}
	if ( (rCD(0, 4, 8)() === "XXX" || rCD(2, 4, 6)() === "XXX") ||
		 (rCD(0, 4, 8)() === "OOO" || rCD(2, 4, 6)() === "OOO") ){
		return true; // diagonal win
	}
	
	return false;
}

function gameReset(){
	var winnerType = "Human";
	var aI = false;
	var won = false;
	var player;
	
	document.getElementById("gameResult").innerHTML = "&nbsp;&nbsp;&nbsp;";

	for(var cell in board){
		if (board[cell] !== "&nbsp;&nbsp;&nbsp;"){
			board[cell] = "&nbsp;&nbsp;&nbsp;";
			document.getElementById(cell).innerHTML = "&nbsp;&nbsp;&nbsp;";
		}
	}
}