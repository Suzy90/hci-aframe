

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');
var myOtherBox = document.getElementById('myBox');

function spin(){
myOtherBox.object3D.rotation.x += rotationSpeed;
myBox.object3D.rotation.x += rotationSpeed;
console.log(myBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps
