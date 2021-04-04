import React from "react";
import paper from "paper";

export default function Example1() {
    return (
        <div className={'babycontainer mt-4'}>
            <canvas id="example1" className={"example1"}/>
            <BouncingBall />
        </div>
    );
}

function BouncingBall() {
    // Define an object a shape, position, velocity, and time step function
    const Ball = paper.Base.extend({
        initialize: function() {
            // Initial velocity
            this.vel = paper.Point.random();

            // Initial position
            this.loc = paper.Point.random().multiply(paper.view.size);

            // Define our object
            this.shape = new paper.Path.Oval([0, 0], [40, 40]);
            this.shape.fillColor = '#0074da';
            this.shapeSymbol = new paper.Symbol(this.shape);
            this.shape = this.shapeSymbol.place();
        },
        update: function () {
            // Update next step's position according to velocity
            this.loc.x += this.vel.x
            this.loc.y += this.vel.y;
            
            // Bounce off of the container limits
            if (this.loc.x  < 0 || this.loc.x  > paper.view.size.width) this.vel.x *= -1;
            if (this.loc.y < 0 || this.loc.y > paper.view.size.height) this.vel.y *= -1;

            // Update the ball's rendering according to current position
            this.shape.matrix = new paper.Matrix().translate(this.loc);
        }
    });

    // Initialize paper and register a function to call every frame
    window.onload = function () {
        // Set up paper
        paper.install(window);
        paper.setup('example1');
        // Our ball
        const ball = new Ball();
        // Every frame, update the ball's position
        paper.view.onFrame = () => ball.update();
    }

    return null;
}