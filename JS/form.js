class Form {
    constructor(){
        this.title = createElement("h2")
        this.title.html("Car Racing Game")
        this.title.position(windowWidth/2-90,10)
        
        this.input = createInput("Name")
        this.input.position(windowWidth/2,windowHeight/2-70)

        this.button = createButton("play")
        this.button.position(windowWidth/2+60,windowWidth/2-60)
        this.button.style("background-color","pink")
        this.button.style("width","100px")
        this.button.style("font-size","20px")
        this.button.style("border-radius","10px")

        this.greeting = createElement("h2")
        this.reset = createButton("Replay")
        this.reset.position(windowWidth-100,50)
        

    }

    hide(){
        this.input.hide()
           this.button.hide()
           this.greeting.hide()
    }

    display(){
       this.reset.mousePressed(()=>{
           player.updateCount(0)
           game.update(0)
           for(var i = 1;i<=4;i++){
               database.ref("players/player"+i).update({
                   Name:"",
                   distance:0
               })
           }
       })
        this.button.mousePressed(()=>{
            this.input.hide()
           this.button.hide()
            player.name= this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount

            player.update()
            player.updateCount(playerCount)

            this.greeting.html("Hello "+player.name)
            this.greeting.position(windowWidth/2-70,windowHeight/4)
        })



    }

}