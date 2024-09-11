// DRAW ROBOT FACE

// Circles
function circle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (type == "stroke") {
    ctx.stroke();
  } else if (type == "fill") {
    ctx.fill();
  }
}

// Rectangles
function rect(x, y, w, h) {
  ctx.fillRect(x, y, w, h);
}

// Lines
function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

// Triangles
function triangle(x1, y1, x2, y2, x3, y3, type) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  if (type == "fill") {
    ctx.fill();
  } else if (type == "stroke") {
    ctx.stroke();
  }
}

// Text
function text(color, size, font, message, x, y) {
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;
  ctx.fillText(message, x, y);
}

// Half-Circle
function halfCircle(x, y, r, type) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI);
  if (type == "stroke") {
    ctx.stroke();
  } else if (type == "fill") {
    ctx.fill();
  }
}
