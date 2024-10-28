//Task 1: Set up Canvas and HTML structure
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

//enable color picker
let colorInput = document.getElementById('color');

//Task 2: Add canvas setup and event handling logic
let drawing = false;
let startX, startY;

function draw(x, y) {
    ctx.strokeStyle = colorInput.value;
    ctx.lineWidth = 2;
const tool = document.querySelector('input[name="tool"]:checked').value;

if (tool === 'line') {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(x, y);
    ctx.stroke();
} else if (tool === 'rectangle') {
    ctx.beginPath();
    ctx.rect(startX, startY, x - startX, y - startY);
    ctx.stroke();
} else if (tool === 'circle') {
    ctx.beginPath();
    ctx.arc(startX, startY, 10, 0, Math.PI*2,false);
    ctx.stroke();
}}
