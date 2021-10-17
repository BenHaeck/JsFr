'use strict';
function startGameLoop (loopFunc, loopRate) {
	setTimeout(()=>startGameLoop(loopFunc,loopRate),1000/loopRate);
	loopFunc(1/loopRate);
}
