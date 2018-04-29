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

	var firstName = document.getElementById("firstName").value;
	var surname = document.getElementById("surname").value;
	var age = document.getElementById("age").value;
	var email = document.getElementById("email").value;
	var phoneNumber = document.getElementById("phoneNumber").value;	
	
	if (firstName == "")
	{
		firstName = currentUser.fName;
	}
	if (surname == "")
	{
		surname = currentUser.lName;
	}	
	if (age == "")
	{
		age = currentUser.age;
	}
	if (email == "")
	{
		email = currentUser.email;
	}
	if (phoneNumber == "")
	{
		phoneNumber = currentUser.phNum;
	}
	
	currentUser.fName = firstName;
	currentUser.lName = surname;
	currentUser.age = age;
	currentUser.email = email;
	currentUser.phNum = phoneNumber;
	
	stringLoggedInUser(currentUser);
}

// Stringify - Logged in User
function stringLoggedInUser(obj) {
	localStorage.loggedInUser = JSON.stringify(obj);
}