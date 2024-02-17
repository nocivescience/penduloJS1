window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var length = 200;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var gravity = 9.8; // Aceleración debido a la gravedad
    var time = 0;
    var timeIncrement = 0.1;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calcular el ángulo usando la fórmula del movimiento armónico simple
        var angle = Math.PI / 4 * Math.cos(Math.sqrt(gravity / length) * time);

        var x = centerX + length * Math.sin(angle);
        var y = centerY + length * Math.cos(angle);

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 20, 0, 2 * Math.PI);
        ctx.fill();

        time += timeIncrement;
    }

    setInterval(draw, 10);
}