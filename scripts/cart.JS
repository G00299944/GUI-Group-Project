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


// Parsing
function parseLoggedInUser() {
	currentUser = JSON.parse(localStorage.loggedInUser);
	currentUserArrayPos = JSON.parse(localStorage.loggedInUser);
}
function parseCart() {
	cart = JSON.parse(localStorage.cart);
}

function dispCurrentUser() {
	document.getElementById("loginFields").innerHTML = "Welcome " + currentUser.fName;
}