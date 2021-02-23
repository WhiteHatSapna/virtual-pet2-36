//Create variables here
var dog,sadDog,happyDog,garden,washroom, database;
var foodS,foodStock;
var fedTime,lastFed,currentTime;
var feed,addFood;
var foodObj;
var gameState,readState;
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dogImg = loadImage("Dog.png")
  happyImg = loadImage("happydog.png")
  
sadDog=loadImage("images/dogImg.png");




}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);


  foodObj = new Food();

  foodstock=database.ref('food');
  foodstock.on("value",readstock);

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  //read game state from database
  readState=database.ref('gameState');
  readState.on("value",function(data){
    gameState=data.val();
  });





  dog= createSprite(100,300,40,40);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  



  
}


function readstock(data)
{
  foodread = data.val();
  console.log(foodread);
}


function writeStock(x)
{
  console.log("write stock");
  if(x<=0)
  {
    x=0;
  }
  else
  {
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}


function draw() {  

background(46, 139, 87);

if(keyWentDown(UP_ARROW))
{
  console.log("up_arrow");
  dog.addImage(happyImg);
  writeStock(foodread)
}
else if(keyWentUp(UP_ARROW))
{
  dog.addImage(dogImg);
}

  drawSprites();
  //add styles here
textSize(13);
fill("green");
stroke("blue");
  text("Press UP Arrow key to feed the dog",250,400);

}



