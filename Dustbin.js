class Dustbin{
    //pass value in the constructor
      constructor(x, y,width,height) {
        //in the jason format adding physics engine properties
          var options = {
              isStatic:true,
              'restitution':0.3,
              'friction':0.5,
              'density':1.2,
          }
        
        this.body=Bodies.rectangle(x, y, width,height,options)
        this.width=width;
        this.height=height;
        this.image=loadImage("dustbingreen.png")
    
        
        
        }
        display(){
        
            var angle = this.body.angle;
            
            push();
           
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
    };
