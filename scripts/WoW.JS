// on load
window.onload = function() {
	parseLoggedInUser();
	dispCurrentUser();
}		

// vars
var currentUser;
var currentUserArrayPos;


function parseLoggedInUser() {
	currentUser = JSON.parse(localStorage.loggedInUser);
	currentUserArrayPos = JSON.parse(localStorage.loggedInUser);
}

function dispCurrentUser() {
	document.getElementById("loginFields").innerHTML = "Welcome " + currentUser.fName + "!";
}