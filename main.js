console.log('javascript ready...')

//! responsive navigation bar 
function showMobileNav() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navibar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navibar";
    }
}

//! Button function checking
function showNotification(params) {
	alert(params.toString())
	return
}