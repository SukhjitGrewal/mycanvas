// Canvas setup
var cnv = document.getElementById("my-canvas");
var ctx = cnv.getContext(`2d`);
cnv.width = 500;
cnv.height = 400;

// Sky
ctx.fillStyle = `lightblue`;
ctx.fillRect(0, 0, 500, 500);

// Grass
ctx.fillStyle = `green`;
ctx.fillRect(0, 280, 500, 500);

// Moutains Gray

// Moutain 1
ctx.fillStyle = `gray`;
ctx.beginPath();
ctx.moveTo(0, 280);
ctx.lineTo(130, 50);
ctx.lineTo(250, 280);
ctx.moveTo(0, 280);
ctx.fill();

// Moutain 2
ctx.fillStyle = `gray`;
ctx.beginPath();
ctx.moveTo(120, 280);
ctx.lineTo(240, 50);
ctx.lineTo(370, 280);
ctx.moveTo(120, 280);
ctx.fill();

// Moutain 3
ctx.fillStyle = `gray`;
ctx.beginPath();
ctx.moveTo(230, 280);
ctx.lineTo(370, 50);
ctx.lineTo(500, 280);
ctx.moveTo(230, 280);
ctx.fill();

// Snow 1
ctx.fillStyle = `white`;
ctx.beginPath();
ctx.moveTo(130, 50);
ctx.lineTo(156, 100);
ctx.lineTo(102, 100);
ctx.moveTo(130, 50);
ctx.fill();
// Snow 2
ctx.fillStyle = `white`;
ctx.beginPath();
ctx.moveTo(370, 50);
ctx.lineTo(340, 100);
ctx.lineTo(399, 100);
ctx.moveTo(370, 50);
ctx.fill();
// Snow 3
ctx.fillStyle = `white`;
ctx.beginPath();
ctx.moveTo(240, 50);
ctx.lineTo(214, 100);
ctx.lineTo(268, 100);
ctx.moveTo(240, 50);
ctx.fill();

// Sun
ctx.fillStyle = `yellow`;
ctx.beginPath();
ctx.arc(55, 40, 25, 0, 2 * Math.PI);
ctx.fill();

// Clouds
let cloud = document.getElementById("cloud");
ctx.drawImage(cloud, 150, 17, 65, 60);
ctx.drawImage(cloud, 390, 25, 65, 60);
ctx.drawImage(cloud, 270, 15, 65, 60);

// Pond
ctx.fillStyle = `blue`;
ctx.beginPath();
ctx.arc(300, 340, 55, 0, 2 * Math.PI);
ctx.fill();

// Fishhead
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(300, 330, 10, 0, 2 * Math.PI);
ctx.fill();

// Fishtail
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(300, 330);
ctx.lineTo(320, 320);
ctx.lineTo(320, 345);
ctx.lineTo(300, 330);
ctx.fill();

// Title
ctx.fillStyle = "rgb(139,13,250)";
ctx.font = "20px Arial";
ctx.fillText("The Forest", 20, 20);

// Wolf
let coyote = document.getElementById("my-canvas2");
ctx.drawImage(coyote, 100, 300, 105, 80);
