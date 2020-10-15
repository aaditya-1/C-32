class Box {
    constructor(x, y) {

        var opt = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, 20, 40, opt);

        World.add(world, this.body);

        this.visibility = 255;

    };
    display() {
        if (this.body.speed < 9) {
            var pos = this.body.position;
            rect(pos.x, pos.y, 20, 40);

        } else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 8;
            tint(255, this.visibility);
            pop();
        }
        // console.log(this.body.speed)

    };

    score() {
        if (this.visibility < 0 && this.visibility > -8) {
            score++
        }
    }
};