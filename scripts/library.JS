// on load
window.onload = function() {
	parseLoggedInUser();
	dispCurrentUser();
	dispGameLibrary();
}		

// vars
var currentUser;
var currentUserArrayPos;
var i;

// Parsing
function parseLoggedInUser() {
	currentUser = JSON.parse(localStorage.loggedInUser);
	currentUserArrayPos = JSON.parse(localStorage.loggedInUser);
}

function dispCurrentUser() {
	document.getElementById("loginFields").innerHTML = "Welcome " + currentUser.fName + ", Wallet: $" + currentUser.accBalance;
}

function dispGameLibrary() {
	ownedGamesArray = currentUser.gameLibrary;

	for(i = 0; i < ownedGamesArray.length; i++) {
			creatGameDiv(ownedGamesArray[i]);
	}

}// dispGameLibrary

function creatGameDiv(gameId) {
	var div = document.createElement("div");
	div.style.width = "100px";
	div.style.height = "100px";
	div.style.color = "white";
	
	switch(gameId) {
		case 0: 
			div.style.background = "red";
			div.innerHTML = "World of Warcraft";
			document.getElementById("gameContainer").appendChild(div);
			break;
		case 1: 
			div.style.background = "green";
			div.innerHTML = "Overwatch";
			document.getElementById("gameContainer").appendChild(div);
			break;
		case 2: 
			div.style.background = "blue";
			div.innerHTML = "Fornite";
			document.getElementById("gameContainer").appendChild(div);
			break;
		case 3: 
			div.style.background = "yellow";
			div.innerHTML = "Minecraft";
			document.getElementById("gameContainer").appendChild(div);
			break;
		case 4: 
			div.style.background = "orange";
			div.innerHTML = "Fallout 4";
			document.getElementById("gameContainer").appendChild(div);
			break;
		case 5: 
			div.style.background = "purple";
			div.innerHTML = "Spore";
			document.getElementById("gameContainer").appendChild(div);
			break;

	}

}// creatGameDiv