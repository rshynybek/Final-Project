var sun = new Image();
var mercury = new Image();
var venus = new Image();
var earth = new Image();
function init() {
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  mercury.src = './assets/images/mercury.jpg';
  venus.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src ='./assets/images/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var canvas = document.getElementById('drawing');
  var context = canvas.getContext('2d');

  context.globalCompositeOperation = 'destination-over';
  context.clearRect(0,0,500,500);

  context.fillStyle = 'rgba(0, 0, 0, 0.4)';
  context.strokeStyle = 'rgba(0, 150, 250, 5)';
  context.save();
  context.translate(300,300);

//mercury
  var time = new Date();
  context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  context.translate(90,0);
  context.fillRect(0,0,0,0);
  context.scale(0.05,0.05);
  context.drawImage(mercury,-12,-12);

  //venus
  var time = new Date();
  context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  context.translate(150,0);
  context.fillRect(0,0,0,0);
  context.scale(100,100);
  context.drawImage(venus,-12,-12);

  //earth
  var time = new Date();
  context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  context.translate(200,0);
  context.fillRect(0,0,0,0);
  context.drawImage(earth,-12,-12);

  context.restore();

  context.beginPath();
  context.arc(300,300,105,0,Math.PI*2,false);
  context.stroke();

  context.beginPath();
  context.arc(300,300,150,0,Math.PI*2,false);
  context.stroke();

  context.beginPath();
  context.arc(300,300,200,0,Math.PI*2,false);
  context.stroke();

  context.drawImage(sun,150,150,300,300);

  window.requestAnimationFrame(draw);

}

init();
