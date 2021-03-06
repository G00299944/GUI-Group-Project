// on load
window.onload = function() {
	parseLoggedInUser();
	parseCart();
	dispCurrentUser();
	basketTotal();
	generateCheckoutTable();
	setCurrentDate();
}		

// vars
var currentUser;
var currentUserArrayPos;
var cart = [];
var i;
var totalPrice = 0;

// valid date coupon
var couponCode = "GUIPROJECT";
var couponY = 2018;
var couponM = 8; 

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
		if((year <= couponY && month <= couponM) ) { // coupon code date validation
			
			totalPrice = totalPrice - (totalPrice*0.1); // subtract coupon 10% from total price

			// if's - check for sufficient funds and age requirement
			if(currentUser.accBalance >= totalPrice) {
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

			// if's - Error messages for age && funds = purchase outcomes
			if(ageReqsMet == false && sufficientFunds == false) { // age = 0, funds = 0, purchase = 0;
				modalMessage = "-Insufficient Funds	-Age Requirement Not Met";
			}
			else if(ageReqsMet == false && sufficientFunds == true) { // age = 0, funds = 1, purchase = 0;
				modalMessage = "-Age Requirement Not Met";
			}
			else if(ageReqsMet == true && sufficientFunds == false) { // age = 1, funds = 0, purchase = 0;
				modalMessage = "-Insufficient Funds";
			}
			else { 
				modalMessage = "-Purchase Successful: Games Added to library"; // age = 1, funds = 1, purchase = 1;
				updateBalance()
				addGames();
			}
		}// coupon date check
		else {
			modalMessage = "-Coupon Out of Date";
		}

	}
	else { // if no coupon code was entered, or invalid coupon code
		// if's - check for sufficient funds and age requirement
		if(currentUser.accBalance >= totalPrice) {
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

		// if's - Error messages for age && funds = purchase outcomes
		if(ageReqsMet == false && sufficientFunds == false) { // age = 0, funds = 0, purchase = 0;
			modalMessage = "-Insufficient Funds	-Age Requirement Not Met";
		}
		else if(ageReqsMet == false && sufficientFunds == true) { // age = 0, funds = 1, purchase = 0;
			modalMessage = "-Age Requirement Not Met";
		}
		else if(ageReqsMet == true && sufficientFunds == false) { // age = 1, funds = 0, purchase = 0;
			modalMessage = "-Insufficient Funds";
		}
		else { 
			modalMessage = "-Purchase Successful: Games Added to library"; // age = 1, funds = 1, purchase = 1;
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

	for(i = 0; i < currentUser.gameLibrary.length; i++) {
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

//=== The Almighty Modal Box ===//
var modalMessage = "DEFAULT_MESSAGE";
var modal = document.getElementById('myModal');
var btn = document.getElementById("purchaseButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	checkout();
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalMessage;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}