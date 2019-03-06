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
		divWelcome1.style.background = "url('images/Hey.png')";
	}
	document.write(greeting);
}

//JQuery - Function to enable smooth scrolling across browsers
$(document).ready(function() {
	$('a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top
				},
				300,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
});
