var canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;

var background_image = "mars.jpg";
var rover_image = "rover.png";

var rover_x = 20;
var rover_y = 20;

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
    background_img_tag.src = background_image;

    rover_img_tag = new Image();
    rover_img_tag.onload = uploadRover;
    rover_img_tag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
      if(keyPressed == "38")
      {
        up();
      }
      if(keyPressed == "40")
      {
        down();
      }
      if(keyPressed == "39")
      {
        right();
      }
      if(keyPressed == "37")
      {
        left();
      }
}

function up(){
  if(rover_y >= 0){
    rover_y = rover_y - 10;
    uploadBackground();
    uploadRover();
  }

}

function down(){
  if(rover_y <= 550){
    rover_y = rover_y + 10;
    uploadBackground();
    uploadRover();
  }

}

function left(){
  if(rover_x >= 0){
    rover_x = rover_x - 10;
    uploadBackground();
    uploadRover();
  }

}

function right(){
  if(rover_x <= 750){
    rover_x = rover_x + 10;
    uploadBackground();
    uploadRover();
  }

}

