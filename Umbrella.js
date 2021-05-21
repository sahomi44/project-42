class Umbrella {
    constructor(x,y){
        
        this.body = Bodies.rectangle(x,y,50,100);
                
        this.animation = loadAnimation("Walking Frame/walking_1.png",
                                       "Walking Frame/walking_2.png",
                                       "Walking Frame/walking_3.png",
                                       "Walking Frame/walking_4.png",
                                       "Walking Frame/walking_5.png",
                                       "Walking Frame/walking_6.png",
                                       "Walking Frame/walking_7.png",
                                       "Walking Frame/walking_8.png");
                                       
        World.add(world, this.body)
    }

    display(){
              
        this.body.addAnimation("walking man",this.animation);
    }
}

