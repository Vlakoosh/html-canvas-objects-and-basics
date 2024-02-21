const canvas = document.getElementById('canvas');

let context = canvas.getContext("2d");

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.height = window_height;
canvas.width = window_width;
canvas.style.background = "whitesmoke";



//making an empty circle;
context.beginPath();
context.strokeStyle = "blue"; // change color of circle
context.lineWidth = 10; //change width of circle
context.arc(200,200, 50, 0, Math.PI*2, false);
context.stroke();
context.closePath();

//making a rectangle
context.fillRect(130, 50, 100, 50);
//making a red rectangle
context.fillStyle = "red";
context.fillRect(50, 0, 50, 50);
