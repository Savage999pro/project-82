var mouseEvent = "empty";
// this variable has been created by us to write all the mouse events
console.log(mouseEvent);
var last_position_of_x , last_position_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
width_of_line = 5;
radius_of_line = 90;

document.getElementById("color_input").value = color;
document.getElementById("width_input").value = width_of_line;
document.getElementById("radius_input").value = radius_of_line;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color_input").value;
    width_of_line = document.getElementById("width_input").value;
    radius_of_line = document.getElementById("radius_input").value;

    mouseEvent = "mousedown";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
    console.log(mouseEvent);
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        console.log("mousedown + mousemove");
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.RadiusLength = radius_of_line;
       // ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
         
        //ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius_of_line, 0, 2 * Math.PI);
        console.log("Current position of x and y coordinates =  ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}




