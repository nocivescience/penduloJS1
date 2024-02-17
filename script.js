window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var angle = 0;
    var length = 200;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var direction = 1;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x = centerX + length * Math.sin(angle);
        var y = centerY + length * Math.cos(angle);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fill();

        // Cambiar la dirección si el ángulo está fuera del rango 180-360
        if (angle < Math.PI) { // Menor que 180 grados
            direction = 1;
        } else if (angle > 2 * Math.PI) { // Mayor que 360 grados
            direction = -1;
        }

        angle += 0.01 * direction;
    }

    setInterval(draw, 10);
}