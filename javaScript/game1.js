var color = ["red", "orange", "yellow", "green", "lightblue", "blue", "gray", "white", "pink"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function random() {
  randomColor();
  randomNumbers();
}

//random color
function randomColor() {
  var box1 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box1").style.backgroundColor = box1;
  var box2 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box2").style.backgroundColor = box2;
  var box3 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box3").style.backgroundColor = box3;
  var box4 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box4").style.backgroundColor = box4;
  var box5 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box5").style.backgroundColor = box5;
  var box6 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box6").style.backgroundColor = box6;
  var box7 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box7").style.backgroundColor = box7;
  var box8 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box8").style.backgroundColor = box8;
  var box9 = color[Math.floor(Math.random() * color.length)];
  document.querySelector(".box9").style.backgroundColor = box9;
}

//random numbers
function randomNumbers() {
  var num1 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num1").innerHTML = num1;
  var num2 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num2").innerHTML = num2;
  var num3 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num3").innerHTML = num3;
  var num4 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num4").innerHTML = num4;
  var num5 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num5").innerHTML = num5;
  var num6 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num6").innerHTML = num6;
  var num7 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num7").innerHTML = num7;
  var num8 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num8").innerHTML = num8;
  var num9 = number[Math.floor(Math.random() * number.length)];
  document.getElementById("num9").innerHTML = num9;
}
