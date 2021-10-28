'use strict';

// plut input values in here and the events will update them to match you key presses.
// the javascript naming convention is weird so use the log keys if you need to know what a certain
let keyinput = {logKeys:false};



document.addEventListener('keydown', (e)=>{
	if (keyinput == null) keyinput = {logKeys:false};
	if (keyinput.logKeys == null) keyinput.logKeys = null;
	if (keyinput[e.code] != null){
		keyinput[e.code] = true;
	}
	if (keyinput.logKeys === true) {
		console.log (e);
	}
});

document.addEventListener('keyup', (e)=>{
	if (keyinput[e.code] != null){
		keyinput[e.code] = false;
	}
});

// this contains the mouse input
// pos is the mouse position on screen
// click is whether or not left click is pressed
const mouseinput = {pos: Vector2.zero(),click: false};
document.addEventListener('mousemove', (e) => {
	let tmx = e.clientX;
	let tmy = e.clientY;


	if (GameRenderer != null) {
		const canvas = GameRenderer.canvas;
		if (canvas != null){
			tmx -= canvas.offsetLeft;
			tmy -= canvas.offsetTop;
		}
	}

	mouseinput.pos.x = tmx;
	mouseinput.pos.y = tmy;
})

document.addEventListener('mouseup', (e)=>{
	//console.log('click')
	mouseinput.click = false;
});

document.addEventListener('mousedown', (e)=>{
	//console.log(e)
	mouseinput.click = true;
});
