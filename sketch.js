

	const Engine = Matter.Engine;
	 const World = Matter.World;
	  const Bodies = Matter.Bodies;
	   const Body = Matter.Body;
	    const Render = Matter.Render;
		 const Constraint = Matter.Constraint;
		  var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject 
		  var rope1,rope2,rope3, rope4,rope5;
		   var world;
		    function setup() { 
		createCanvas(1600, 700);
		 rectMode(CENTER);
		  engine = Engine.create();
		   world = engine.world;
		 roofObject=new roof(width/2,height/3,width/7,20);
		  bobDiameter=40;
		startBobPositionX=width/2;
		 startBobPositionY=height/4+300;
		  bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
		   bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
		    bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
			 bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
			  bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	var render = Render.create({
		 element: document.body,
		  engine: engine,
		   options: {
			   width: 1200,
			 height: 700, 
			wireframes: false 
		}
	 }
	 ); 
		rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0) 
		rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0) 
		rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	    rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
		 rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0) 
		 Engine.run(engine);
		 }

		  function draw() {
			   rectMode(CENTER);
			   background(230);
				roofObject.display(); 
				rope1.display()
				rope2.display()
				rope3.display() 
				rope4.display()
			     rope5.display()
				  bobObject1.display();
				   bobObject2.display(); 
				   bobObject3.display();
				    bobObject4.display(); 
					bobObject5.display();

					textSize(25);
					stroke("black");
					text("press up-arrow to move bob1",1050,500)
					text("press down-arrow to move bob5",1050,525)
					text("press left-arrow to move bob2 along with bob1",1050,550)
					text("press right-arrow to move bob4 along with bob5",1050,575)
				 }
		 function keyPressed() {
			 if (keyCode === UP_ARROW) {
			 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-30,y:-35});
		 }
			
		
				if (keyCode === DOWN_ARROW) {
				Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:40,y:45});
			}
		
			   
		if (keyCode === LEFT_ARROW) {
			Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		}

		if (keyCode === RIGHT_ARROW) {
			Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:50,y:45});
		}
	}