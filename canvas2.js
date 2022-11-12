let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');
let colorArray = ["#40407a", "#227093", "#cd6133", "#84817a", "#ffb142", "#33d9b2", "#218c74"];

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
})


class Circle {
    constructor(radius, x, y, dx, dy){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        // this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }
    //  make_base = () => {
    //      base_image.onload = ()=> {
    //          c.drawImage(base_image,this.x,this.y);
    //         }
    //     }
    draw = () => {
        let base_image = new Image();
        base_image.src = './heart.png';
        // c.beginPath();
        // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.drawImage(base_image,this.x,this.y)
        // c.fillStyle = this.color;
        // c.fill();

    }

    update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.y += this.dy;
        // if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
        //     if (this.radius < 40) {
        //         this.radius += 1;
        //     }
        // } else if (this.radius > 3) {
        //     this.radius -= 1;
        // }
        this.draw();
    }

}
let CircleArray = [];

let dx, dy, radius, x, y;
for (let i = 0; i < 300; i++) {
    let dx = Math.random() * 2;
    let dy = Math.random() * 2;
    let radius = 50;
    let x = (Math.random() * (innerWidth - radius * 2)) + radius;
    let y = (Math.random() * (innerHeight - radius * 2)) + radius;

    CircleArray.push(new Circle(radius, x, y, dx, dy));
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < CircleArray.length; i++) {
        CircleArray[i].update();
    }

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    x += dx;
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    y += dy;
}
animate();
