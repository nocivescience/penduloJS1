class Pendulum {
    constructor(centerX, centerY, length, angle, gravity, freq) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.length = length;
        this.angle = angle;
        this.gravity = gravity;
        this.time = 0;
        this.timeIncrement = 0.1;
        this.freq = freq;
    }

    draw(ctx) {
        var x = this.centerX + this.length * Math.sin(this.angle);
        var y = this.centerY + this.length * Math.cos(this.angle);

        ctx.beginPath();
        ctx.moveTo(this.centerX, this.centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();

        this.time += this.timeIncrement;
        this.angle = Math.PI / 4 * Math.cos(Math.sqrt(this.gravity / this.length*this.freq) * this.time);
    }
}

function linspace(start, end, n) {
    var step = (end - start) / (n - 1);
    return Array.from({ length: n }, (d, i) => start + i * step);
}
let pendulums = [];
window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    const arrayFreq = linspace(.1, .05, 150);
    const arrayLength = linspace(50, 530, 150);

    if (arrayFreq.length === arrayLength.length) {
        for (let i = 0; i < arrayFreq.length; i++) {
            pendulums.push(new Pendulum(canvas.width / 2, canvas.height / 2-250, arrayLength[i], 0, 9.8, arrayFreq[i]));
        }
    } else {
        console.log("Los arrays no tienen la misma longitud");
    }

    // for (let i in arrayFreq) {
    //     for (let j in arrayLength) {
    //         pendulums.push(new Pendulum(canvas.width / 2, canvas.height / 2, arrayLength[j], 0, 9.8, arrayFreq[i]));
    //     }
    // }

    // var pendulums = [
    //     new Pendulum(canvas.width / 2, canvas.height / 2, 200, 0, 9.8),
    //     new Pendulum(canvas.width / 2, canvas.height / 2, 150, 0, 9.8),
    //     new Pendulum(2 * canvas.width / 2, canvas.height / 2, 250, 0, 9.8)
    // ];

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pendulums.forEach(pendulum => pendulum.draw(ctx));
    }

    setInterval(draw, 10);
}