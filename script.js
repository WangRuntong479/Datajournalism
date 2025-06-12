class Danmaku {
  constructor(canvas, text, speed) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.text = text;
    this.speed = speed;
    this.x = canvas.width;
    this.y = Math.random() * canvas.height;
  }

  draw() {
    this.ctx.save();
    this.ctx.font = '20px Arial';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(this.text, this.x, this.y);
    this.ctx.restore();
  }

  move() {
    this.x -= this.speed;
    if (this.x < -this.ctx.measureText(this.text).width) {
      this.x = this.canvas.width;
      this.y = Math.random() * this.canvas.height;
    }
  }
}

const canvas = document.getElementById('danmakuCanvas');
const ctx = canvas.getContext('2d');

const danmakus = [
  new Danmaku(canvas, 'Hello, 小林加油！!', 1),
  new Danmaku(canvas, '相同的境遇', 2),
  new Danmaku(canvas, '不公平', 3),
  
  // 添加更多弹幕对象
];

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  danmakus.forEach(danmaku => {
    danmaku.draw();
    danmaku.move();
  });
  requestAnimationFrame(loop);
}

loop();

