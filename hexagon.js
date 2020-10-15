class Ball {
    constructor(x, y) {

        var opt = {
            isStatic: false,
            density: 0.5
        }

        this.body = Bodies.circle(x, y, 30, opt);
        this.image = loadImage("hexa.png");
        World.add(world, this.body);

    }
    display() {
        var pos = this.body.position;
        // ellipse(pos.x, pos.y, 30, 30);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 130, 130);
    }
}