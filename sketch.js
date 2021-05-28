var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
//create feed and lastFed variable here
var feed,lastFed
var feedDog;


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feedDog = createButton("Feed The Dog")
  feedDog.position(600,55)
  feedDog.mousePressed(feedDog)
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();
  addFood.display()
  dog.display()
  //write code to read fedtime value from the database 
  
 
  //write code to display text lastFed time here
  if(lastFed>=12){
  }
  //show time in PM format when last fed is greater than 12
  else if(lastFed == 0){
  text("lastFed : 12",350,30)
  }
  else{

  }
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);
  //write code here to update food stock and last fed time
  dog.hour()
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}