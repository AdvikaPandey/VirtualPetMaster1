var dog,dogImg, happyDog, database, foodS, foodStock,database;

function preload()
{
   database = firebase.database(); 
   
   dogImg = loadImage('images/dogImg.png');
   happyDog = loadImage('images/dogImg1.png');

}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46,139,87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here
  textSize(25);
  fill("cyan");
  stroke("black");
  text("Food remaining: ",foodStock)


}

function readStock(){
    foodS = data.val();
}

function writeStock(x){
    if(x<=0){
      x=0;
    }
    else{
      x = x-1;
    }

    database.ref('/').update({
      Food:x
    })
}