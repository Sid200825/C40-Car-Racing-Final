class Game {
    constructor(){
        
    }
    getState(){
        database.ref("gameState").on("value",function(data){
           gameState = data.val()
        })
    }
    update(State){
        database.ref("/").update({
            gameState:State
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1 = createSprite(100,200)
        car1.addImage(car1image)
        car2 = createSprite(300,200)
        car2.addImage(car2image)
        car3 = createSprite(500,200)
        car3.addImage(car3image)
        car4 = createSprite(700,200)
        car4.addImage(car4image)
        cars = [car1, car2, car3, car4]
        
        
    } 
    
    play(){
        form.hide()
        textSize(30)
        text("Game Started",120,100) 
        Player.getPlayerInfo()
        player.getRank()

        if(allPlayers!=undefined){
            background("#C68767")
            image(track,0,-windowHeight*4,windowWidth,windowHeight*5)
            var Yposition =130
            var x = 170
            var y = 0
            var index = 0
            for(var i in allPlayers){
                index = index+1
                x = x+200
                y = windowHeight-allPlayers[i].distance
                cars[index-1].x=x
                cars[index-1].y=y
                
                if(index === player.index){
                    cars[index-1].shapeColor = "blue"
                    camera.position.x = windowWidth/2
                    camera.position.y = cars[index-1].y
                    strokeWeight(3)
                    stroke("red")
                    fill("blue")
                    ellipse(x,y,60,60)
                }
                else{
                    cars[index-1].shapeColor = "red"
                }
                
            }
        }
        if(keyDown(UP_ARROW)&&player.index!=null){
            player.distance = player.distance + 10
            console.log(player.distance)
            player.update()
        }
        if(player.distance>3490){
            gameState = 2
          
            player.rank = player.rank + 1
            Player.updateRank(player.rank)
            
        }

        drawSprites() 
    }
    end(){
     
        textSize(30)
        text("Game Over",windowWidth/2,-windowHeight*4)


    }
}