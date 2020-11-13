var playerCount = 0, gameState = 0
var database
var form,player,game
var allPlayers
var car1, car2, car3, car4, cars = []
var car1image, car2image,car3image,car4image,track 

function preload(){
    car1image = loadImage("images/car1.png")
    car2image = loadImage("images/car2.png")
    car3image = loadImage("images/car3.png")
    car4image = loadImage("images/car4.png")
    track = loadImage("images/track.jpg")
}
    


function setup(){
    createCanvas(windowWidth ,windowHeight);
   

    database = firebase.database()
    game = new Game()
    game.getState()
    game.start()
    console.log(displayWidth ,displayHeight)
    console.log(windowWidth ,windowHeight)


    
}

function draw(){
  background("lightgreen")
  if(playerCount == 4){
      game.update(1)
  }
  if(gameState == 1){
      game.play()
  }
  if(gameState === 2){
      game.end()
  }
}




