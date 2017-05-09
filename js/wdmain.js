

$(document).ready(function() {

   //// scroll counter
   
    $(window).scroll(function() {
	var scrollTop = $(window,'html, body').scrollTop();
	$('#scrollCount').html(scrollTop);
	});

  
});


/*

var zombie = $('#zombie'),
	pLocs = [0, -250, -500, -750, -1000, -1250, -1500]
	curFrm = 0,
	lastStep=0;

skrollr.init({
	beforerender: function(o){
		// If the user has scrolled 50 pixels down
		// since the last time we shifted the background image,
		// we must be moving forward, so move to the next frame
		// in the spritesheet
		if(o.curTop > lastStep + 500) {
			if (curFrm>=6){ curFrm=-1; }
			zombie.css('background-position', pLocs[curFrm++] + 'px 0px');
			lastStep = o.curTop;
		// If the user has scrolled 50 pixels up,
		// we’re moving backwards, so move to the previous frame
		} else if(o.curTop < lastStep - 500) {
			if (curFrm<=0){ curFrm=7; }
			zombie.css('background-position', pLocs[curFrm--] + 'px 0px');
			lastStep = o.curTop;
		}
	}
});

*/

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
		if(o.curTop > lastStep + 400) {
			if (curFrm>=animationCycle-1){ curFrm=-1; }
			zombie.css('background-position', pLocs[++curFrm] + 'px ' + backPosY);
			lastStep=o.curTop;
		} else if(o.curTop < lastStep - 400) {
			if (curFrm<=0){ curFrm=animationCycle; }
			zombie.css('background-position', pLocs[--curFrm] + 'px ' + backPosY);
			lastStep = o.curTop;
		}
	}
});