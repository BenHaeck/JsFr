'use strict';
const keyinput = {};

document.addEventListener('keydown', (e)=>{
	if (keyinput[e.code] != null){
		keyinput[e.code] = true;
	}
});

document.addEventListener('keyup', (e)=>{
	if (keyinput[e.code] != null){
		keyinput[e.code] = false;
	}
});

const mouseinput = {x: 0,y: 0,click: false};
document.addEventListener('mousemove', (e) => {
	let tmx = e.clientX;
	let tmy = e.clientY;

	if (RenderVals != null) {
		tmx -= RenderVals.canvas.offsetLeft;
		tmy -= RenderVals.canvas.offsetTop;
	}

	mouseinput.x = tmx;
	mouseinput.y = tmy;
})

document.addEventListener('mouseup', (e)=>{
	//console.log('click')
	mouseinput.click = false;
});

document.addEventListener('mousedown', (e)=>{
	//console.log(e)
	mouseinput.click = true;
});
