// DRAW ROBOT FACE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// mouse movement listener
let mouseX;
let mouseY;

cnv.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  let rect = cnv.getBoundingClientRect();
  mouseX = event.clientX - rect.left;
  mouseY = event.clientY - rect.top;
  console.log(`x: ${mouseX} Y: ${mouseY}`);
}

// Rectangle Behind Head for Ears
ctx.fillStyle = "rgb(100, 100, 100)";
rect(80, 260, 460, 80);

// Filled Triangle for Hair
triangle(180, 80, 140, 100, 220, 100, "fill");

// Filled Triangle for Hair
triangle(340, 80, 300, 100, 380, 100, "fill");

// Outlined Triangle for Hair
triangle(260, 80, 220, 100, 300, 100, "stroke");

// Outlined Triangle for Hair
triangle(420, 80, 380, 100, 460, 100, "stroke");

// Filled Triangle for Neck
triangle(300, 200, 220, 600, 380, 600, "fill");

// Rectangle Head
ctx.fillStyle = "rgb(180, 180, 180)";
rect(100, 100, 400, 400);

// Filled Circle for Left Eye Socket
ctx.fillStyle = "rgb(235, 235, 235)";
circle(200, 250, 50, "fill");

// Filled Circle for Right Eye Socket
circle(400, 250, 50, "fill");

// Rectangle for Mouth
ctx.fillRect(200, 350, 200, 60);

// Horizontal Line for Teeth
ctx.strokeStyle = "rgb(180, 180, 180)";
line(200, 300, 400, 380);

// First Vertical Line for Teeth
line(250, 350, 250, 410);

// Second Vertical Line for Teeth
line(300, 350, 300, 410);

// Third Vertical Line for Teeth
line(350, 350, 350, 410);

// Filled Circle for Left Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(200, 250, 30, "fill");

// Filled Circle for Right Eye
ctx.fillStyle = "rgb(100, 100, 100)";
circle(400, 250, 10, "fill");

// Outlined Circle for Left Eye Socket
ctx.strokeStyle = "rgb(100, 100, 100)";
circle(200, 250, 50, "stroke");

// Outlined Circle for Right Eye Socket
circle(400, 250, 50, "stroke");

// Line for Left Eyebrow
ctx.lineWidth = 2;
line(150, 180, 250, 180);

// Line for Right Eyebrow
line(350, 160, 450, 180);

// Outlined Triangle for Nose
triangle(300, 280, 320, 320, 280, 320, "stroke");

// Watermelon
circle(56, 593, 50, "fill");

ctx.fillStyle = "green";
halfCircle(100, 450, 100, "fill");

ctx.fillStyle = "red";
halfCircle(100, 450, 85, "fill");

ctx.fillStyle = "black";
circle(62, 502, 4, "fill");
circle(123, 510, 4, "fill");
circle(104, 472, 4, "fill");
circle(151, 480, 4, "fill");
circle(56, 467, 4, "fill");

// Orange
ctx.fillStyle = "rgb(100, 100, 100)";
circle(450, 593, 50, "fill");

ctx.fillStyle = "orange";
halfCircle(450, 505, 50, "fill");
ctx.fillStyle = "#ed7b45  ";
halfCircle(450, 505, 42, "fill");

// Message
text("purple", "50", "Arial", "Yum yum", 310, 45);

// Hat
ctx.fillStyle = "#2e2f3b ";
circle(150, 75, 60, "fill");
triangle(145, 54, 11, 204, 365, 113, "fill");

// monocle
ctx.strokeStyle = "#e2f3b ";
circle(402, 249, 70, "stroke");
ctx.fillStyle = "#0000ff80";
circle(402, 249, 70, "fill");
ctx.fillStyle = "#2e2f3b ";
rect(471, 242, 35, 10, "stroke");
