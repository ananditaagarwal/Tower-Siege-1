class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = loadImage("polygon.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling, 200, 200);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x < 220){
                image(this.sling, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            else{
                image(this.sling, pointA.x + 30, pointA.y - 10, 15, 30);
            }
        }
    }
}