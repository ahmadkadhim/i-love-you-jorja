'use strict';
 
function fullWidthHearts() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	$('#container').height(h).width(w);
	// $('#particles').height(h).width(w);
}

$(fullWidthHearts);
$(window).resize(fullWidthHearts);

setTimeout(function() {
	$('#I').removeClass('hide');
}, 18500);

setTimeout(function() {
	$('#LOVE').removeClass('hide');
}, 18900);

setTimeout(function() {
	$('#YOU').removeClass('hide');
}, 19300);

setTimeout(function() {
	$('#Jorja').removeClass('hide');
}, 19800);

setTimeout(function() {
	$('#hearts').children().addClass('heart');
	$('#container').removeClass('flash');
}, 18500);


setTimeout(function() {
	$('#happy-valentines').removeClass('hide');
}, 26500);

setTimeout(function() {
	$('#made-by').removeClass('hide');
}, 30500);


particlesJS('particles', {
    particles: {
      color: '#fff',
      shape: 'circle',
      opacity: .15,
      size: 10.5,
      size_random: true,
      nb: 100,
      line_linked: {
        enable_auto: true,
        distance: 50,
        color: '#fff',
        opacity: 0.25,
        width: 5,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 5.5
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 200
      },
      detect_on: 'canvas',
      mode: 'grab',
      line_linked: {
        opacity: 0.5
      },
      events: {
        onclick: {
          push_particles: {
            enable: true,
            nb: 4
          }
        }
      }
    },
    retina_detect: true
});

// check how loading in incognito/bad connection can throw off timing between CSS and jQuery?
