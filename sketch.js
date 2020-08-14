var bananaimage;
var obstaclegroup;
var obstacleimage;
var background;
var score;
var foodgroup;
var animal;

function preload(){
  
  backImage=loadImage("jungle.jpg")
  player_running=
    loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");
  bananaimage=loadImage("banana.png");
  stongimage=loadImage("stone.png");
  
                  }

function setup() {
  createCanvas(400, 400);
  
  var background;
  background.addImage("jungle.png");
  background.velocityX=-10;
  if(background.x<0){
    background.x=background.width/2;
    
    ground.visibility=false;
    
    player.addAnimation("monkey_01.png");
}

function draw() {
  background(220);
  
  if( monkey.isTouching(animal)){
    score=score+2;
    foodgroup.destroy();
    
    if(obstaclegroup.isTouching(player)){
      player.scale=0.2;
    }
    
    
    switch(score){
      case 10:player.scale=0.12;
        break;
       case 20:player.scale=0.14;
        break;
        case 30:player.scale=0.16;
        break;
        case 40:player.scale=0.18;
        break;
        default:break;
        
        
    }
    
    stroke("white");
    textSize("20");
    fill("white");
    text="score:"+score,500,50);
    
    
    drawSprites();
}