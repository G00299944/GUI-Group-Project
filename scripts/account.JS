// on load
window.onload = function() {
	parseLoggedInUser();
	dispCurrentUser();
	generateCurrentUserTable()
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

//=== Gathering Table Data ===//
function generateCurrentUserTable() {
	var firstName = document.getElementById("currentUserFirstName");
	var surname = document.getElementById("currentUserSurname");
	var age = document.getElementById("currentUserAge"); 
	var email = document.getElementById("currentUserEmail"); 
	var phoneNumber = document.getElementById("currentUserPhoneNumber");
	
	firstName.innerHTML = currentUser.fName;
	surname.innerHTML = currentUser.lName;
	age.innerHTML = currentUser.age;
	email.innerHTML = currentUser.email;
	phoneNumber.innerHTML = currentUser.phNum;
}

//=== Spawning the Form that should update the Table ===//
function summonTheFormTable(){
	document.getElementById("currentUserForm").classList.remove("invisible");
}

//=== The Magical Form that SHOULD change Current User Data ===//
function updateCurrentUserDetails() {
	currentUser.fName = document.getElementById("firstName").value;
	currentUser.lName = document.getElementById("surname").value;
	currentUser.age = document.getElementById("age").value;
	currentUser.email = document.getElementById("email").value;
	currentUser.phNum = document.getElementById("phoneNumber").value;
}