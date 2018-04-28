// on load
window.onload = function() {
	parseLoggedInUser();
	dispCurrentUser();
}		

// Game Object Template
function Game(id, title, price, ageReq) {
	this.id = id;
	this.title = title;
	this.price = price;
	this.ageReq = ageReq;
}

// Game Object Instantiation
var games = [];
games[0] = new Game(0, "World of Warcraft",44.99, 13);
games[1] = new Game(1, "Overwatch", 39.99, 12);
games[2] = new Game(2, "Fornite", 0.00, 13);
games[3] = new Game(3, "Minecraft", 23.95, 5);
games[4] = new Game(4, "Fallout 4", 29.99, 18);
games[5] = new Game(5, "Spore", 14.99, 8);

// vars
var currentUser;
var currentUserArrayPos;
// Cart Array
var cart = [];
var carSize = 0;

function parseLoggedInUser() {
	currentUser = JSON.parse(localStorage.loggedInUser);
	currentUserArrayPos = JSON.parse(localStorage.loggedInUser);
}

function dispCurrentUser() {
	document.getElementById("loginFields").innerHTML = "Welcome " + currentUser.fName + "!";
}

// Add to Cart
function gameToCart(game) {
	cart[0] = games[game];

	stringCart();
}

// Stringify - cart
function stringCart() {
	localStorage.cart = JSON.stringify(cart);
}