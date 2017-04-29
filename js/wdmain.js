

$(document).ready(function() {

   //// scroll counter
   
    $(window).scroll(function() {
	var scrollTop = $(window,'html, body').scrollTop();
	$('#scrollCount').html(scrollTop);
	});

  
});




var zombie = $('#zombie'),
	pLocs = [0, -250, -500, -750, -1000, -1250, -1500],
	curFrm = 0,
	lastStep=0,
	// We need just a couple extra variables
	animationCycle, backPosY;

skrollr.init({
	beforerender: function(o){
		// If the user has scrolled less than 2800 pixels
		// from the top our character should be human,
		// otherwise… he’s turned.
		if(o.curTop < 2800) {
			animationCycle=7;
			backPosY= '0px';
		} else {
			animationCycle=4;
			backPosY= '-190px';
		}
		if(o.curTop > lastStep + 50) {
			if (curFrm>=animationCycle-1){ curFrm=-1; }
			zombie.css('background-position', pLocs[++curFrm] + 'px ' + backPosY);
			lastStep=o.curTop;
		} else if(o.curTop < lastStep - 50) {
			if (curFrm<=0){ curFrm=animationCycle; }
			zombie.css('background-position', pLocs[--curFrm] + 'px ' + backPosY);
			lastStep = o.curTop;
		}
	}
});