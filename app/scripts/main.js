'use strict';



function fullWidthHearts() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	$('#hearts').height(h).width(w);
}

$(fullWidthHearts);
$(window).resize(fullWidthHearts);