window.onload = () =>  {
    const canvas = document.getElementById("canvas"),
          context = canvas.getContext("2d"),
          width = canvas.width =  window.innerWidth,
          height = canvas.height = window.innerHeight;

    //
    let centerX = width * .5,
          centerY = height * .5,
          radius = 200,
          angle = 0,
          speed = 0.01;
          x = undefined,
          y = undefined;

    // Draw the circle
    render();

    function render() {
        // Clear the context
        context.clearRect(0, 0, width, height);

        // Find the x and y position using sin and cos
        x = centerX + Math.cos(angle) * radius;
        y = centerY + Math.sin(angle) * radius;

        // Drow the circle at the point
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();
        
        // Incriment the angle
        angle += speed;

        // Call the function again
        requestAnimationFrame(render);
    }
}
