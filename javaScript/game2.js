var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];


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

var outputs = [];
//take the value and hidden
document.getElementById("num1").addEventListener("mouseover", function() {
  document.getElementById("num1").style.visibility = "hidden";
  outputs.push(document.getElementById("num1").innerHTML);
});
document.getElementById("num2").addEventListener("mouseover", function() {
  document.getElementById("num2").style.visibility = "hidden";
  outputs.push(document.getElementById("num2").innerHTML);
});
document.getElementById("num3").addEventListener("mouseover", function() {
  document.getElementById("num3").style.visibility = "hidden";
  outputs.push(document.getElementById("num3").innerHTML);
});
document.getElementById("num4").addEventListener("mouseover", function() {
  document.getElementById("num4").style.visibility = "hidden";
  outputs.push(document.getElementById("num4").innerHTML);
});
document.getElementById("num5").addEventListener("mouseover", function() {
  document.getElementById("num5").style.visibility = "hidden";
  outputs.push(document.getElementById("num5").innerHTML);
});
document.getElementById("num6").addEventListener("mouseover", function() {
  document.getElementById("num6").style.visibility = "hidden";
  outputs.push(document.getElementById("num6").innerHTML);
});
document.getElementById("num7").addEventListener("mouseover", function() {
  document.getElementById("num7").style.visibility = "hidden";
  outputs.push(document.getElementById("num7").innerHTML);
});
document.getElementById("num8").addEventListener("mouseover", function() {
  document.getElementById("num8").style.visibility = "hidden";
  outputs.push(document.getElementById("num8").innerHTML);
});
document.getElementById("num9").addEventListener("mouseover", function() {
  document.getElementById("num9").style.visibility = "hidden";
  outputs.push(document.getElementById("num9").innerHTML);
});


//show the result
function result() {
  if (outputs == 0) {
    alert("Please play :) ");
  } else {
    alert("The order in which the numbers disappeared is:" + outputs);
  }
}
