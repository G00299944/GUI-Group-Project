// User Object Template
function User(email, pWord, fName, lName, age, phNum, accBalance) {
	this.email = email;
	this.pWord = pWord;
	this.fName = fName;
	this.lName = lName;
	this.age = age;
	this.phNum = phNum;
	this.accBalance = accBalance;
}


// User Object Instantiation
var users = [];
users[0] = new User("dnbutler@gmail.com", "testPassword27", "Darren", "Butler", 23, 353892382755, 100.00); // Darren
users[1] = new User("HamSoro@hotmail.com", "1234", "Connor", "Brookfield", 16, 353871234567, 0.01); // Connor
users[2] = new User("resh@compuserve.com", "5678", "Evan", "Greaney", 21, 02356, 64.32); // Evan

// Other Vars
var x;
var i;


// login 
function login() {
	var emailBool = false;
	var pWordBool = false;
	var e = document.getElementById("emailIn").value;
	var p = document.getElementById("passwordIn").value;
	
	for (i = 0; i < users.length; i++) {
		if(e == users[i].email) {
			emailBool = true;
			if(p == users[i].pWord) {
				pWordBool = true;
				alert("logged in!");
				x = i;
				stringLoggedInUser(users[x]);
				document.getElementById("loginFields").innerHTML = "Welcome " + users[x].fName + "! <br> <button id='logoutButton' onclick:'logOut()'>Logout</button>";
			}
		}// if

	}// for	
	
	if ((emailBool && pWordBool) == false) 
	alert("Incorrect email or password!");	
}

//=== Logout Function Template ===//
function logOut()
{
	
}

// Logged in User
function stringLoggedInUser(obj) {
	localStorage.loggedInUser = JSON.stringify(users[x]);
	localStorage.loggedInUserArrayPos = JSON.stringify(x);
}


