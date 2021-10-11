'use strict';
const keyinput = {};

document.addEventListener('keydown',(e)=>{
	if (keyinput[e.code] != null){
		keyinput[e.code] = true;
	}
});

document.addEventListener('keyup',(e)=>{
	if (keyinput[e.code] != null){
		keyinput[e.code] = false;
	}
});
