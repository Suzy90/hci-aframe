

// // changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
myOtherBox = document.getElementById('myOtherBox');

function spin(){
 myOtherBox.object3D.rotation.x -= rotationSpeed;
console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps

document.getElementById("demo").addEventListener("mouseenter", mouseEnter);
document.getElementById("demo").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementById("demo").style.color = "metal";
}

function mouseLeave() {
  document.getElementById("demo").style.color = "wood";
