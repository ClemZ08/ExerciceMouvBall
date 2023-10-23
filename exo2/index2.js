class Ball {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vx = (Math.random() - 0.5) * 10;
    this.vy = (Math.random() - 0.5) * 10;
    this.radius = 50;

    this.el = document.createElement("div");
    this.el.style.width = this.el.style.height = `${this.radius * 2}px`;
    this.el.style.borderRadius = "50%";
    this.el.style.position = "absolute";
    this.el.style.backgroundColor = this.color;
    this.el.style.left = `${this.x - this.radius}px`;
    this.el.style.top = `${this.y - this.radius}px`;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > window.innerWidth) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > window.innerHeight) {
      this.vy = -this.vy;
    }

    this.el.style.left = `${this.x - this.radius}px`;
    this.el.style.top = `${this.y - this.radius}px`;
  }
}

class Game {
  constructor() {
    this.balls = [];
  }

  add(ball) {
    this.balls.push(ball);
    return this;
  }

  start() {
    const update = () => {
      for (let ball of this.balls) {
        ball.move();
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }
}

const ball = new Ball(50, 50, "red");
const ball2 = new Ball(50, 50, "blue");
const ball3 = new Ball(50, 50, "blue");
const ball4 = new Ball(50, 50, "yellow");
const ball5 = new Ball(50, 50, "green");
const ball6 = new Ball(50, 50, "green");
const ball7 = new Ball(50, 50, "red");
const ball8 = new Ball(50, 50, "grey");

const game = new Game();
game.add(ball).add(ball2).add(ball3).add(ball4).add(ball5).add(ball6).add(ball7).add(ball8);

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(ball.el);
  document.body.appendChild(ball2.el);
  document.body.appendChild(ball3.el);
  document.body.appendChild(ball4.el);
  document.body.appendChild(ball5.el)
  document.body.appendChild(ball6.el);
  document.body.appendChild(ball7.el);
  document.body.appendChild(ball8.el);

  game.start();
});
