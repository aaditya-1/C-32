class Rope {
    constructor(bodyA, pointB) {

        var opt = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03
        }

        this.rope = Constraint.create(opt);
        World.add(world, this.rope)
        this.pointB = pointB;
    }

    fly() {
        this.rope.bodyA = null;
    }

    attach(body) {
        this.rope.bodyA = body;
    }

    display() {
        if (this.rope.bodyA) {

            var point1 = this.rope.bodyA.position;
            var point2 = this.pointB;


            stroke("blue");
            strokeWeight(4);

            line(point1.x, point1.y, point2.x, point2.y);
        }
    }

}