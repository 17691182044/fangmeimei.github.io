var hearts = [];
var texts = ["方乔我喜欢你", "方美美，我爱你！", "爱你爱你","I Love You"];
var canvas = document.getElementById("drawHeart");
var wW = window.innerWidth;
var wH = window.innerHeight;
var ctx = canvas.getContext("2d");
var heartImage = new Image();
heartImage.src = "./heart.svg";
var num = 100;
init();
window.addEventListener("resize", function() {
  wW = window.innerWidth;
  wH = window.innerHeight;
});

function init() {
  canvas.width = wW;
  canvas.height = wH;
  for (var i = 0; i < num; i++) {
    hearts.push(new Heart(i % 5));
  }
  requestAnimationFrame(render);
}

function getColor() {
  var val = Math.random() * 10;
  if (val > 0 && val <= 1) {
    return "#00f";
  } else if (val > 1 && val <= 2) {
    return "#f00";
  } else if (val > 2 && val <= 3) {
    return "#0f0";
  } else if (val > 3 && val <= 4) {
    return "#368";
  } else if (val > 4 && val <= 5) {
    return "#666";
  } else if (val > 5 && val <= 6) {
    return "#333";
  } else if (val > 6 && val <= 7) {
    return "#f50";
  } else if (val > 7 && val <= 8) {
    return "#e96d5b";
  } else if (val > 8 && val <= 9) {
    return "#5be9e9";
  } else {
    return "#d41d50";
  }
}

function getText() {
  var val = Math.random() * 10;
  if (val > 1 && val <= 3) {
    return texts[0] || "方乔我喜欢你";
  } else if (val > 3 && val <= 5) {
    return texts[1] || "方美美，我爱你！";
  } else if (val > 5 && val <= 8) {
    return texts[2] || "爱你爱你";
  } else {
    return texts[3] || "I Love You";
  }
}

function Heart(type) {
  this.type = type;
  this.x = Math.random() * wW;
  this.y = Math.random() * wH;
  this.opacity = Math.random() * 0.5 + 0.5;
  this.vel = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5
  };
  this.initialW = wW * 0.5;
  this.initialH = wH * 0.5;
  this.targetScale = Math.random() * 0.15 + 0.02;
  this.scale = Math.random() * this.targetScale;
  this.fx = Math.random() * wW;
  this.fy = Math.random() * wH;
  this.fs = Math.random() * 10;
  this.text = getText();
  this.fvel = {
    x: (Math.random() - 0.5) * 5,
    y: (Math.random() - 0.5) * 5,
    f: (Math.random() - 0.5) * 2
  };
}
Heart.prototype.draw = function() {
  ctx.save();
  ctx.globalAlpha = this.opacity;
  // ctx.drawImage(heartImage, this.x, this.y, this.width, this.height);
  ctx.drawImage(
    heartImage,
    this.x,
    this.y,
    this.width * 0.3,
    this.height * 0.3
  );
  ctx.scale(this.scale + 1, this.scale + 1);
  if (!this.type) {
    ctx.fillStyle = getColor();
    ctx.font = "italic " + this.fs + "px sans-serif";
    ctx.fillText(this.text, this.fx, this.fy);
  }
  ctx.restore();
};
Heart.prototype.update = function() {
  this.x += this.vel.x;
  this.y += this.vel.y;
  if (this.x - this.width > wW || this.x + this.width < 0) {
    this.scale = 0;
    this.x = Math.random() * wW;
    this.y = Math.random() * wH;
  }
  if (this.y - this.height > wH || this.y + this.height < 0) {
    this.scale = 0;
    this.x = Math.random() * wW;
    this.y = Math.random() * wH;
  }
  this.scale += (this.targetScale - this.scale) * 0.1;
  this.height = this.scale * this.initialH;
  this.width = this.height * 1.4;
  this.fx += this.fvel.x;
  this.fy += this.fvel.y;
  this.fs += this.fvel.f;
  if (this.fs > 50) {
    this.fs = 2;
  }
  if (this.fx - this.fs > wW || this.fx + this.fs < 0) {
    this.fx = Math.random() * wW;
    this.fy = Math.random() * wH;
  }
  if (this.fy - this.fs > wH || this.fy + this.fs < 0) {
    this.fx = Math.random() * wW;
    this.fy = Math.random() * wH;
  }
};

function render() {
  ctx.clearRect(0, 0, wW, wH);
  for (var i = 0; i < hearts.length; i++) {
    hearts[i].draw();
    hearts[i].update();
  }
  requestAnimationFrame(render);
}