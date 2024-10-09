window.onload = () => {
    // Setup the canvas
    const canvas = document.getElementById("canvas"),
          context = canvas.getContext("2d"),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight;
    

    // Setup the position an object to be rnderd there
    let centerY = height * .5,
        centerX = width * .5,
        offset = height * .4,
        speed = 0.01,
        angle = 0;

    // Create the object and animate it.
    render();

    function render() {
        // find the y axis position to move the object up and down.
        // Use sin to animate it between 1 and -1
        let y = centerY + Math.sin(angle) * offset;
        
        // Clear the context before drowing the object. it is a Recursion function
        // and there will be an object in the context allways
        context.clearRect(0, 0, width, height);
        
        // Drow the path
        context.beginPath();
        context.arc(centerX, y, 50, 0, Math.PI * 2, false);
        context.fill();
        
        // Incriment the angle to move the object when calling the function again
        angle += speed;
        
        // Implimenting Recursion to animate the object
        requestAnimationFrame(render);
    }
}