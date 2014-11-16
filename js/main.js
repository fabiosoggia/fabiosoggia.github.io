$(function(){

	// Placeholder text
	$("#text").text('A creative developer for high quality systems!');

	// Effetto "scrittura"
	setTimeout(function (argument) {
		$("#text").html('').typed({
			strings: [
				'Hi!',
				'I\'m Fabio.',
				'Nice to meet you!',
				'I\'m a developer from Piedimonte Matese, Italy.',
				'I\'m studying at "Università degli Studi di Salerno".',
				'I\'m almost done with my studies and I will be ready for graduation very soon.',
				'I\'m very passionate about technology.',
				'I can code in many programming languages since I was young. ^1000 Really!',
				'I love reading, music and much more.',
				'I love design too! ^1000 Minimal design as you can see.',
				'I designed this website for you! ^1000 I hope you enjoy it!',
				'Right now, I am looking for a job. ^3000 A nice one.',
				// 'Check out my "curriculum vitae" below.',
				'If you are interested in what you see or just to say hi, feel free to contact me.',
				'I\'ll really appreciate it!',
				'Thank you for your time. ^10000 =) ^2000 '
			],
			typeSpeed: 30,
			backDelay: 3000,
			backSpeed: 5,
			callback: function(){ }
		});
	}, 5000);

	// Fix for android cssanimations false positive.
	// Check: http://forrst.com/posts/Disable_CSS_animations_for_Android_devices-JCk
	Modernizr.android = Modernizr.touch && !Modernizr.webgl;
	Modernizr.cssanimations = !Modernizr.android && Modernizr.cssanimations;

	// Emula il cambio colore dello sfondo
	if (!Modernizr.cssanimations) {
		console.log("Using js emulated background effect.");

		var duration 			= 180;	// Seconds
		var colors 				= [ "#DB5858", "#c2be4e", "#6EC275", "#58A7DB", "#744175" ];
		var step_duration 		= (duration * 1000) / colors.length;
		var bg 					= $('body');

		var i = 1;
	    var animate_loop = function() {
	        bg.animate({
	        	backgroundColor: colors[(i++) % colors.length]
	        }, step_duration, animate_loop);
	    }
	    animate_loop();
	}

	// Emula il fadein degli elementi
	if (!Modernizr.cssanimations) {
		$("#content h1, #content p, #content a").animate({
			opacity: 1
		}, 2000);
	}
});

