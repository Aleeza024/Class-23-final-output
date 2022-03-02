class Ground{
    constructor(x,y,w,h){
var prop ={
    isStatic : true
};
   this.body = Bodies.rectangle(x,y,w,h,prop);
   this.w = w;
   this.h = h;
   World.add(world,this.body);
   }
   display(){
       var pos = this.body.position;
       //angle = 60
       Matter.Body.rotate(this.body,angle);

       push();
       fill("purple");
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       rect(0,0,this.w,this.h);
      pop();
      angle = angle+0.1
   }
   
}