var curr = "square";
var changecolor = document.getElementById('color');

var circle = document.getElementById('block');
var shape = ["square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-bottomleft", "triangle-bottomright", "triangle-right"];

var color = ["red", "orange", "green", "maroon", "pink", "violet"];

changecolor.addEventListener('click', function(){
    var rand = color[Math.floor(Math.random()*color.length)];
    circle.style.backgroundColor = rand;
});

document.getElementById('shape').addEventListener('click',function(){
    var rand = shape[Math.floor(Math.random()*shape.length)];
    document.getElementById(curr).setAttribute("id",rand);
    curr=rand;
})