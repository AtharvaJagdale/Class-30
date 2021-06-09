class SLing{

constructor(a,b)
{
 var options={

 bodyA:a,
 bodyB:b,
 stiffness:0.03,
 lenght:10
 


 }

    this.sling=Constraint.create(options)
    World.add(world,this.sling)



}
 display()
 {
     push ()
   strokeWeight(3)
   stroke("Blue")
   line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
    this.sling.bodyB.position.x,this.sling.bodyB.position.y)
pop()
 }



}