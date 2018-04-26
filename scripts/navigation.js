// Navigation bar Buttons - Event Listeners
document.getElementById("store").addEventListener("click", function() {pageNavigation("index");});
document.getElementById("cart").addEventListener("click", function() {pageNavigation("cart");});
document.getElementById("library").addEventListener("click", function() {pageNavigation("library");});
document.getElementById("about").addEventListener("click", function() {pageNavigation("about");});

function pageNavigation(page){
	switch(page)
	{
		case "index":
			window.location.href = "index.html";
			break;
		case "cart":
			window.location.href = "cart.html";
			break;
		case "library":
			window.location.href = "library.html";
			break;			
		case "about":
			window.location.href = "account.html";
			break;						
	}
}