// Close out of the menu after user clicks on an anchor
// This is only relevant on mobile view (the lowest width
// media query), because on all other views the menu
// is static (always at top of the page)

function closeMenu() {
	document.getElementById("toggle").click(); // click the "toggle" element which = hamburger menu which closes menu

	// scroll page down by 75 pixels to account for header
	// unless page is greater than 1500 pixels
	// because then fullpage.JS is activated which accounts
	// for the header when it auto-scrolls
	console.log(window.innerWidth);
	if (window.innerWidth < 1500) {
		setTimeout(function () {
			window.scrollBy(0, -75);
		}, 2);
	}
}
