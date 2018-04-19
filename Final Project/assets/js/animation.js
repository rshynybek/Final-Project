var canvas = document.getElementById('drawing');
var context = canvas.getContext('2d');

context.fillStyle="white";
context.fillRect(0,0,150,75);
context.moveTo(150,50);
context.stroke();

var pos = 0;
context.fillRect(pos,0,40,40);
setInterval(function() {
  context.clearRect(0,0,400,400);
  context.fillRect(pos,0,40,40);
  pos++;
  if (pos>400) {
    pos = 0;
  }
},15);
