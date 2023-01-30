const colorOptions = Array.from(
    document.getElementsByClassName("color-options")
)

const lineWidth = document.getElementById("line-width")
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementById("color");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;

function onMove(event){
 if(isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();    
    return
 }
 ctx.moveTo(event.offsetX, event.offsetY)
}

function startPainting(){
isPainting = true;
}

function cancelPainting(){
isPainting = false;
ctx.beginPath();
}

function onLineWidthchange(event) {
 ctx.lineWidth=event.target.value;
}


function onColorChange(event) {
    ctx. strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue
}


canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
color.addEventListener("change", onColorChange);
lineWidth.addEventListener("change", onLineWidthchange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick))



