1// on load
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
	div.style.width = "315px";
	div.classList.add("libraryDiv");
	
	switch(gameId) {
		case 0: 
			div.innerHTML = "<img src=\'images/gameCovers/World of Warcraft-285x380.jpg'></img> <br><hr> <h4 align='center'>World of Warcraft</h4> <br> <button class='btn'>Download</button> <button class='btn'>Play</button>";			
			div.style.float = "left";
			document.getElementById("LibraryGameContainer").appendChild(div);
			break;
		case 1: 
			div.innerHTML = "<img src=\'images/gameCovers/Overwatch-285x380.jpg'></img> <br><hr> <h4 align='center'>Overwatch</h4> <br> <button class='btn'>Download</button> <button class='btn'>Play</button>";			
			div.style.float = "left";
			document.getElementById("LibraryGameContainer").appendChild(div);
			break;
		case 2: 
			div.innerHTML = "<img src=\'images/gameCovers/Fortnite-285x380.jpg'></img> <br><hr> <h4 align='center'>Fortnite</h4> <br> <button class='btn'>Download</button> <button class='btn'>Play</button>";			
			div.style.float = "left";
			document.getElementById("LibraryGameContainer").appendChild(div);
			break;
		case 3: 
			div.innerHTML = "<img src=\'images/gameCovers/Minecraft-285x380.jpg'></img> <br><hr> <h4 align='center'>Minecraft</h4> <br> <button class='btn'>Download</button> <button class='btn'>Play</button>";			
			div.style.float = "left";
			document.getElementById("LibraryGameContainer").appendChild(div);
			break;
		case 4: 
			div.innerHTML = "<img src=\'images/gameCovers/Fallout 4-285x380.jpg'></img> <br><hr> <h4 align='center'>Fallout 4</h4> <br> <button class='btn'>Download</button> <button class='btn'>Play</button>";			
			div.style.float = "left";
			document.getElementById("LibraryGameContainer").appendChild(div);
			break;
		case 5: 
			div.innerHTML = "<img src=\'images/gameCovers/Spore-285x380.jpg'></img> <br><hr> <h4 align='center'>Spore</h4> <br> <button class='btn'>Download</button> <button class='btn'>Play</button>";			
			div.style.float = "left";
			document.getElementById("LibraryGameContainer").appendChild(div);
			break;
	}

}// creatGameDiv