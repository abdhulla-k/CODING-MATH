window.onload = () => {
    let canvas = document.getElementById("canvas"),
          context = canvas.getContext("2d"),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight,
          arrowX = width / 2,
          arrowY = height / 2,
          dy, dx,
          angle = 0;

    render();

    function  render() {
        context.clearRect(0, 0, width, height);
    
        context.save();
        context.translate(arrowX, arrowY);
        context.rotate(angle);

        // Draw the arrow
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);
        context.stroke();

        // Incriment the angle
        context.restore();
        requestAnimationFrame(render);
    }

    document.body.addEventListener("mousemove", (e) => {
        dy = e.clientY - arrowY;
        dx = e.clientX - arrowX;
        // angle = Math.atan(dy/dx);
        angle = Math.atan2(dy, dx);
    });
}