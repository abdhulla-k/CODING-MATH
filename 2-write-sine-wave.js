// Drow a sin wawe in a canvas
window.onload = () => {
    // Setup canvas
    const canvas = document.getElementById("canvas"),
          context = canvas.getContext("2d"),
          width = canvas.width =  window.innerWidth,
          height = canvas.height = window.innerHeight;

    // Make the wave center of the canvas
    context.translate(0, height/2);

    // Draw a line through the center, top and bottom of the wave
    context.fillRect(0, 0, 2000, 0.3);
    context.fillRect(0, 100, 2000, 0.3);
    context.fillRect(0, -103, 2000, 0.3);

    // scale the y axis to make the wave oposit. it is not mandatory for the drowing
    context.scale(0.5, -0.5)

    // Draw a sign wave
    for(let angle = 0; angle <= 180; angle+= 0.001) {
        let x = angle * 200,
            y = Math.sin(angle) * 200;

        context.fillRect(x, y, 5, 5);
    }
}