import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Code from '../../../components/code';
import Example1 from './examples/example1'

export default function LunarBabies() {
    const images = '../img/';

    return (
        <Container className="my-2 top">
            <Row className="justify my-2 justify-content-md-center">
                <Col md={"8"} className='mx-4'>
                    <div className={'babycontainer header'}>
                        <iframe className={'lunarbaby'} title='lunar baby' src='https://camilodoa.ml/lunarbaby' name='lunar baby' />
                    </div>
                    <h2 className="my-4 pb-4">Reinforcement learning with lunar babies</h2>
                    <h3 className="my-4">Introduction</h3>
                    <div className={'babycontainer'}>
                        <Example1/>
                    </div>
                    <p className="my-2">
                        It's relatively straightforward to make something move on a screen.
                        In the browser, we can do this using <i>paper.js</i>. To make a
                        circle bounce around at constant velocity we can do as follows:
                    </p>
                    <p>First we have to define an object that will be displayed. It needs with a constructor and a render function.</p>
                    <p>Then, we register the render function with paper to call it on every frame.</p>
                    <p>
                        In the example below, we start by selecting a random position and placing a circle symbol there.
                        Then, we generate a random velocity. On every frame, we'll be adding it's y
                        and x components to our current position's y and x coordinates. 
                    </p>

                    <Code text={`// Define an object a shape, position, velocity, and time step function
const Ball = paper.Base.extend({
    initialize: function() {
        // Initial velocity
        this.vel = paper.Point.random();

        // Initial position
        this.loc = paper.Point.random().multiply(paper.view.size);

        // Define our shape
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
}`}/>
                </Col>
            </Row>
        </Container>
    );
}