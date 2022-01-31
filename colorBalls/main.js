// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
function Ball(x, y, velX, velY, color, size) {
  // this.x = x;
  // this.y = y;
  // this.velX = velX;
  // this.velY = velY;
  Shape.call(x, y, velX, velY, velY, exists);
  this.color = color;
  this.size = size;
}
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
// Затем мы используем метод arc() для отслеживания формы дуги на бумаге. Его параметры:
// Положение x и y центра дуги - мы указываем свойства x и y нашего шара.
// Радиус нашей дуги - мы указываем свойство size шарика.
// Последние два параметра определяют начальное и конечное число градусов по кругу, по которому проходит дуга.
// Здесь мы указываем 0 градусов и 2 * PI, что эквивалентно 360 градусам в радианах
// (досадно, вы должны указать это в радианах). Это даёт нам полный круг. Если вы указали только 1 * PI, вы получите полукруг (180 градусов).
var testBall = new Ball(50, 100, 4, 4, "red", 10);

Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }
  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }
  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }
  if (this.y - this.size <= 0) {
    this.velY = -this.velY;
  }
  this.x += this.velX;
  this.y += this.velY;
};
Ball.prototype.collisionDetect = function () {
  //  общий алгоритм для проверки столкновения двух окружностей.
  //  Мы в основном проверяем, перекрывается ли какая-либо из областей круга.
  // Это объясняется далее 2D collision detection.
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color =
          "rgb(" +
          random(0, 255) +
          "," +
          random(0, 255) +
          "," +
          random(0, 255) +
          ")";
      }
    }
  }
};

var balls = [];
function loop() {
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, width, height);
  while (balls.length < 25) {
    var ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      "rgb(" +
        random(0, 255) +
        "," +
        random(0, 255) +
        "," +
        random(0, 255) +
        ")",
      random(10, 20)
    );
    balls.push(ball);
  }
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }
  requestAnimationFrame(loop);
}
loop();

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  exists = true;
}

EvilCircle().prototype.draw = function () {};

EvilCircle().assign();
