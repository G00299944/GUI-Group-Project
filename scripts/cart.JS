// on load
window.onload = function() {
	parseLoggedInUser();
	parseCart();
	dispCurrentUser();
	basketTotal();
	generateCheckoutTable();
}		

// vars
var currentUser;
var currentUserArrayPos;
var cart = [];
var i;
var totalPrice = 0;
var couponCode = "GUIPROJECT";

var couponY = 2018;
var couponM = 8; 
var couponD = 16;
var year, month, date;

// this line is not our code, all other code dealing with date validation is our own
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/'); 
//source = "https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript"

function basketTotal() {
	for(i = 0; i< cart.length; i++) {
		totalPrice += cart[i].price;
	}
}

function generateCheckoutTable() {
	var table = document.getElementById("checkoutTable");
	var count = cart.length;
	
    for(i = 0; i < cart.length; i++) {
        
        row = table.insertRow(1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);

        cell1.innerHTML = count;
        cell2.innerHTML = cart[i].title;
        cell3.innerHTML = "$" + cart[i].price;

        count--;
	}	

	row = table.insertRow(i+1);
	cell1 = row.insertCell(0);
	cell2 = row.insertCell(1);
	cell3 = row.insertCell(2);

	cell1.innerHTML = "Total: ";
	cell2.innerHTML = " ";
	cell3.innerHTML = "$" + totalPrice.toFixed(2);
}

// Checkout
function checkout() {
	var inputCode = document.getElementById("couponCode").value;
	var sufficientFunds = false;
	var ageReqsMet = false;
	var highestAge = 0;
	setCurrentDate();

	if(inputCode == couponCode) {
		if(year <= couponY && month <= couponM) {
			
			totalPrice = totalPrice - (totalPrice*0.1); // subtract coupon 10% from total price

			// if's - check for sufficient funds and age requirement
			if(currentUser.accBalance > totalPrice) {
				sufficientFunds = true;
			}// sufficient funds
			for(i = 0; i < cart.length; i++) { // cycle through cart array to find out the highest age requirement
				if(highestAge < cart[i].ageReq) {
					highestAge = cart[i].ageReq;
				}
			}
			if(currentUser.age > highestAge) {
				ageReqsMet = true;
			}// age requirement
			//======================================================

			// if's - Error messages for age && funds = pruchase outcomes
			if(ageReqsMet == false && sufficientFunds == false) { // age = 0, funds = 0, pruchase = 0;
				alert("insufficient funds & too young!");
			}
			else if(ageReqsMet == false && sufficientFunds == true) { // age = 0, funds = 1, pruchase = 0;
				alert("too young!");
			}
			else if(ageReqsMet == true && sufficientFunds == false) { // age = 1, funds = 0, pruchase = 0;
				alert("insufficient funds!");
			}
			else { 
				alert("you bought games yo"); // age = 1, funds = 1, pruchase = 1;
				updateBalance()
				addGames();
			}
		}// coupon date check
	}
	else { // if no coupon code was entered, or invalid coupon code
		// if's - check for sufficient funds and age requirement
		if(currentUser.accBalance > totalPrice) {
			sufficientFunds = true;
		}// sufficient funds
		for(i = 0; i < cart.length; i++) { // cycle through cart array to find out the highest age requirement
			if(highestAge < cart[i].ageReq) {
				highestAge = cart[i].ageReq;
			}
		}
		if(currentUser.age > highestAge) {
			ageReqsMet = true;
		}// age requirement
		//======================================================

		// if's - Error messages for age && funds = pruchase outcomes
		if(ageReqsMet == false && sufficientFunds == false) { // age = 0, funds = 0, pruchase = 0;
			alert("insufficient funds & too young!");
		}
		else if(ageReqsMet == false && sufficientFunds == true) { // age = 0, funds = 1, pruchase = 0;
			alert("too young!");
		}
		else if(ageReqsMet == true && sufficientFunds == false) { // age = 1, funds = 0, pruchase = 0;
			alert("insufficient funds!");
		}
		else { 
			alert("you bought games yo"); // age = 1, funds = 1, pruchase = 1;
			updateBalance()
			addGames();
		}
	}// coupon code
}

// Parsing
function parseLoggedInUser() {
	currentUser = JSON.parse(localStorage.loggedInUser);
	currentUserArrayPos = JSON.parse(localStorage.loggedInUser);
}
function parseCart() {
	cart = JSON.parse(localStorage.cart);
}

function dispCurrentUser() {
	document.getElementById("loginFields").innerHTML = "Welcome " + currentUser.fName + ", Wallet: $" + currentUser.accBalance;
}

function setCurrentDate() {
	year = parseInt(utc.substring(0,4));
	month = parseInt(utc.substring(5,7));
	date = parseInt(utc.substring(8,10));
}

function addGames() {
	var gameCount = 0;

	for(i = 0; i < currentUser.gameLibrary.lenght; i++) {
		gameCount++;
	}

	gameCount++;

	for(i = gameCount; i < cart.length + gameCount; i++) {
		currentUser.gameLibrary[i + gameCount] = cart[i - gameCount].id;
	}
	stringLoggedInUser(currentUser);
}

function updateBalance() {

	var newBalance = currentUser.accBalance - totalPrice;

	currentUser.accBalance = newBalance.toFixed(2);
	dispCurrentUser();
	stringLoggedInUser(currentUser);
}

function stringLoggedInUser(obj) {
	localStorage.loggedInUser = JSON.stringify(currentUser);
}