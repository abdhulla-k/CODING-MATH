window.onload = () => {
    const canvas = document.getElementById("canvas"),
          context = canvas.getContext("2d"),
          width = canvas.width = window.innerWidth,
          height = canvas.height = window.innerHeight;
    
    // Fill Full a rectangle in black
    // context.fillRect(0, 0, width, height);

    // Write an 100 random lines
    for (let i = 0; i <= 100; i++) {
        context.beginPath();
        context.strokeStyle = "black"
        context.moveTo(Math.random() * width, Math.random() * height );
        context.lineTo(Math.random() * width, Math.random() * height);
        context.stroke();
    }
}