//Vanilla JS - Function to say good morning, afternoon, evening or hey depending on the time.
function timeGreeting() {
	var today = new Date();
	var hourNow = today.getHours();
	var greeting;
	var divWelcome1 = document.getElementById('divWelcome1');
//	var w = window.outerWidth;		unused currently

	if (hourNow > 18) {
		greeting = 'Good <br> Evening.';
		divWelcome1.style.background = "url('images/Evening@2x.png')";
	} else if (hourNow > 12) {
		greeting = 'Good <br> Afternoon.';
		divWelcome1.style.background = "url('images/Afternoon@2x.png')";
	} else if (hourNow > 0) {
		greeting = 'Good <br> Morning.';
		divWelcome1.style.background = "url('images/Morning@2x.png')";
	} else {
		greeting = 'Hey.';
		divWelcome1.style.background = "url('images/Hey@2x.png')";
	}
	document.write(greeting);
}

