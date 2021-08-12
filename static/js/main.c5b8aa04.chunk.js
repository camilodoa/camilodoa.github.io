(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{54:function(e,t,n){},70:function(e,t){},72:function(e,t){},76:function(e,t,n){"use strict";n.r(t);n(0);var a=n(20),i=n.n(a),s=(n(54),n(6)),r=n(24),c=n(1);function l(){return Object(c.jsx)(r.a,{bg:"white",expand:"md",fixed:"top",className:"mb-4",children:Object(c.jsx)(r.a.Brand,{href:"/",children:Object(c.jsx)("b",{children:"camilo ortiz"})})})}var o=n(22);function h(){return Object(c.jsx)(r.a,{bg:"white",fixed:"bottom",className:"mt-4 pb-3",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(o.a.Link,{href:"https://www.linkedin.com/in/camilodortiz/",children:"linkedin"}),Object(c.jsx)(o.a.Link,{href:"https://github.com/camilodoa",children:"github"}),Object(c.jsx)(o.a.Link,{href:"https://twitter.com/camilodoa",children:"twitter"}),Object(c.jsx)(o.a.Link,{href:"https://camilodoa.ml/resume/",children:"resume"})]})})}var d=n(26),m=n(16),b=n(17),j=n(33);function p(e){var t=e.path,n=e.name,a=e.link,i=e.description;return Object(c.jsx)(m.a,{className:"align justify mb-3 justify-content-md-center",children:Object(c.jsxs)(b.a,{lg:8,className:"mt-4",children:[Object(c.jsx)(j.a,{alt:n,src:t,fluid:!0}),Object(c.jsx)("h4",{className:"my-4",children:Object(c.jsx)("b",{children:Object(c.jsx)("a",{href:a,rel:"noopener noreferrer",target:"_blank",className:"body-link",children:n})})}),i?Object(c.jsxs)("p",{className:"my-4",children:[Object(c.jsx)("b",{children:n.slice(0,-3)})," ",i]}):null]})})}function x(){return Object(c.jsxs)(d.a,{className:"mb-4 pb-4",children:[Object(c.jsx)(m.a,{className:"justify my-2 justify-content-md-center",children:Object(c.jsxs)(b.a,{md:"8",className:"mx-4",children:[Object(c.jsx)("div",{className:"babycontainer header my-4",children:Object(c.jsx)("iframe",{className:"lunarbaby",title:"lunar baby",src:"https://camilodoa.ml/lunarbaby",name:"lunar baby"})}),Object(c.jsxs)("p",{className:"my-4",children:["Hi, I'm ",Object(c.jsx)("b",{children:"Camilo"}),"."]}),Object(c.jsxs)("p",{className:"my-4",children:["My interests lie in the space between machine learning, web development, and contemporary art. Right now I'm working on ",Object(c.jsx)("a",{href:"https://github.com/camilodoa/lxai",rel:"noopener noreferrer",target:"_blank",className:"body-link",children:"solving reinforcement learning problems"})," with Spiking Neural Networks (SNNs)."]}),Object(c.jsxs)("p",{className:"my-4",children:["In 2019 and 2020, I worked at the University of Oxford with "," ",Object(c.jsx)("a",{href:"https://www.cs.ox.ac.uk/michael.benedikt/",rel:"noopener noreferrer",target:"_blank",className:"body-link",children:"Michael Benedikt"})," on his "," ",Object(c.jsx)("a",{href:"http://www.cs.ox.ac.uk/projects/pdq/home.html",rel:"noopener noreferrer",target:"_blank",className:"body-link",children:"PDQ"})," ","(Proof-Driven Query planning) project. There, I developed a full-stack"," ",Object(c.jsx)("a",{href:"http://pdq-webapp.cs.ox.ac.uk/react-ui",rel:"noopener noreferrer",target:"_blank",className:"body-link",children:"web application"})," ","that provided an interface for programmers to generate, save, and run optimal query-plans on semantically-interconnected datasources."]}),Object(c.jsxs)("p",{children:["While I'm still contributing to PDQ here and there, I primarily spend my time leading UI development for my team at"," ",Object(c.jsx)("a",{href:"https://www.jpmorgan.com/country/US/en/jpmorgan",rel:"noopener noreferrer",target:"_blank",className:"body-link",children:"JPMorgan Chase & Co."})," and working on my personal projects."]})]})}),Object(c.jsx)(m.a,{className:"align justify justify-content-md-center mt-2",children:Object(c.jsx)(b.a,{md:"8",children:Object(c.jsx)("h3",{className:"my-4",children:Object(c.jsx)("b",{children:"selected projects"})})})}),Object(c.jsx)(p,{path:"../img/ai-melts-ice.png",name:"ai-melts-ice.ml",link:"https://ai-melts-ice.ml",description:"is a web app designed to visualize\n          historical and predicted data of county-specific ICE arrests in the US. The predictions are\n          generated by an LSTM neural network trained on longitudinal data (2014 - 2018)\n          from Syracuse's TRAC web API."}),Object(c.jsx)(m.a,{className:"align justify mb-3 justify-content-md-center",children:Object(c.jsxs)(b.a,{md:8,children:[Object(c.jsx)("div",{className:"babycontainer mt-4",children:Object(c.jsx)("iframe",{className:"dra",title:"DRA",src:"https://camilodoa.ml/dra",name:"dra"})}),Object(c.jsx)("h4",{className:"my-4",children:Object(c.jsx)("b",{children:Object(c.jsx)("a",{href:"https://camilodoa.ml/dra",rel:"noopener noreferrer",target:"_blank",className:"body-link",children:"Dra"})})}),Object(c.jsxs)("p",{className:"my-4",children:[Object(c.jsx)("b",{children:"Dra"})," ","is a Deep Q-Network agent that lives in your browser. Over time, it\nlearns to approach the goal in the center of the page with the help of a neural network."]})]})})]})}var u=n(37);function y(e){var t=e.text;return Object(c.jsx)(u.a,{className:"my-2",text:t,language:"javascript",showLineNumbers:!0,theme:u.b})}var f=n(8),w=n.n(f);function O(){return Object(c.jsxs)("div",{className:"babycontainer mt-4",children:[Object(c.jsx)("canvas",{id:"example1",className:"example1",resize:!0}),Object(c.jsx)(v,{})]})}function v(){var e=w.a.Base.extend({initialize:function(){this.vel=w.a.Point.random(),this.loc=w.a.Point.random().multiply(w.a.view.size),this.shape=new w.a.Path.Oval([0,0],[40,40]),this.shape.fillColor="#0074da",this.shapeSymbol=new w.a.Symbol(this.shape),this.shape=this.shapeSymbol.place()},update:function(){this.loc.x+=this.vel.x,this.loc.y+=this.vel.y,(this.loc.x<0||this.loc.x>w.a.view.size.width)&&(this.vel.x*=-1),(this.loc.y<0||this.loc.y>w.a.view.size.height)&&(this.vel.y*=-1),this.shape.matrix=(new w.a.Matrix).translate(this.loc)}});return window.onload=function(){w.a.install(window),w.a.setup("example1"),w.a.view.onResize=function(){t=new e};var t=new e;w.a.view.onFrame=function(){return t.update()}},null}function g(){return Object(c.jsx)(d.a,{className:"my-2 top",children:Object(c.jsx)(m.a,{className:"justify my-2 justify-content-md-center",children:Object(c.jsxs)(b.a,{md:"8",className:"mx-4",children:[Object(c.jsx)("div",{className:"babycontainer header",children:Object(c.jsx)("iframe",{className:"lunarbaby",title:"lunar baby",src:"https://camilodoa.ml/lunarbaby",name:"lunar baby"})}),Object(c.jsx)("h2",{className:"my-4 pb-4",children:"Reinforcement learning with lunar babies"}),Object(c.jsx)("h3",{className:"my-4",children:"Introduction"}),Object(c.jsx)("div",{className:"babycontainer",children:Object(c.jsx)(O,{})}),Object(c.jsxs)("p",{className:"my-2",children:["It's relatively straightforward to make something move on a screen. In the browser, we can animate objects with ",Object(c.jsx)("i",{children:"paper.js"}),". As a starting point, let's make a ball bounce around."]}),Object(c.jsx)("p",{children:"First we have to define an object that will be displayed. It needs a constructor and a render function."}),Object(c.jsx)("p",{children:"Then, we register the render function with paper to call it on every frame."}),Object(c.jsx)("p",{children:"In the example below, we start by selecting a random position and placing a circle symbol there. Then, we generate a random velocity. On every frame, we'll be adding it's y and x components to our current position's y and x coordinates."}),Object(c.jsx)(y,{text:"// Define an object a shape, position, velocity, and time step function\nconst Ball = paper.Base.extend({\n    initialize: function() {\n        // Initial velocity\n        this.vel = paper.Point.random();\n\n        // Initial position\n        this.loc = paper.Point.random().multiply(paper.view.size);\n\n        // Define our shape\n        this.shape = new paper.Path.Oval([0, 0], [40, 40]);\n        this.shape.fillColor = '#0074da';\n        this.shapeSymbol = new paper.Symbol(this.shape);\n        this.shape = this.shapeSymbol.place();\n    },\n    update: function () {\n        // Update next step's position according to velocity\n        this.loc.x += this.vel.x\n        this.loc.y += this.vel.y;\n        \n        // Bounce off of the container limits\n        if (this.loc.x  < 0 || this.loc.x  > paper.view.size.width) this.vel.x *= -1;\n        if (this.loc.y < 0 || this.loc.y > paper.view.size.height) this.vel.y *= -1;\n\n        // Update the ball's rendering according to current position\n        this.shape.matrix = new paper.Matrix().translate(this.loc);\n    }\n});\n\n// Initialize paper and register a function to call every frame\nwindow.onload = function () {\n    // Set up paper\n    paper.install(window);\n    paper.setup('example1');\n    // Our ball\n    const ball = new Ball();\n    // Every frame, update the ball's position\n    paper.view.onFrame = () => ball.update();\n}"})]})})})}function N(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",children:Object(c.jsx)(x,{})}),Object(c.jsx)(s.a,{path:"/lunarbabies",children:Object(c.jsx)(g,{})})]}),Object(c.jsx)(h,{})]})}var k=n(25);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(c.jsx)(k.a,{basename:"",children:Object(c.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[76,152,153]]]);
//# sourceMappingURL=main.c5b8aa04.chunk.js.map