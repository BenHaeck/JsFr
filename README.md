# SimpleJSGameLib
A simple JavaScript game library

This library is under the MIT licence. so feel free to use and.or modify it however you please.

This library is built to be moduler so feel free to mix and match. However the input module depends
on the rendering module to find the position of the canvas.

To use it. you first need to setup the Renderer, and pass in the id of the HTML canvas.
Then create the game world and pass in your target framerate, you can also pass in your start,
update and draw functions. However I think its better to set the functions after initializing,
once your done initializing, you call the gameWorlds run function. Here is what your project should look like "

setupRenderer("screen");
  
const gameWorld = new GameWorld (60);

gameWorld.start = function () {

}

// runs every frame
gameWorld.update = function (dt) {

}

// put your drawing code in here
gameWorld.draw = function () {

}

gameWorld.start ();
gameWorld.run();
"
