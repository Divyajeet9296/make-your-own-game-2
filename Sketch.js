var obstacle1, obstacle2, player;
var obstacle1Img, obstacle2Img, guyRunning1Img, guyRunning2Img;

function preload(){
    obstacle1Img=loadImage("obstacle1.png");
    obstacle2Img=loadImage("obstacle2.png");
    guyRunning1Img=loadImage("guyRunning1.png");
    guyRunning2Img=loadImage("guyRunning2.png");
}

function setup(){
createCanvas(500,500);
obstacle1=new obstacle1(30,50,40,50);
}

function draw(){
    background("yellow");
    drawSprites();
}