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
        speed = 0.01,
        x = undefined,
        y = undefined;
          

    // Place dots aroud the circle
    placeDotesAroundCircle();

    // Draw the circle
    render();

    // Function to animate an element around a circle
    function render() {
        // Clear the context
        context.clearRect(x, y, 10, 10);

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

    // Funciton to place dotes around a circle
    function placeDotesAroundCircle() {
        let numObjects = 20;
        let slice = Math.PI * 2 / numObjects;
        let radius = 400;

        for(let i = 0; i <= numObjects; i++) {
            let angle = i * slice;

            let x = centerX + Math.cos(angle) * radius;
            let y = centerY + Math.sin(angle) * radius;

            console.log(x, y);

            context.beginPath();
            context.arc(x, y, 10, 0, Math.PI * 2, false);
            context.fill();

            angle += slice;
        }
    }
}
