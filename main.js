
// Create canvas variable
var canvas= new fabric.Canvas("canvasy");

//Set initial positions for ball and hole images.

ballx=0;
bally=0;
netx=900;
nety=250;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		objecth=Img;
		objecth.scaleToWidth(50);
		objecth.scaleToHeight(50);
		objecth.set({
			top:nety,
			left:netx
		});
		canvas.add(objecth);
	});
	// write code to Upload golf image on the canvas
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("soccerball.png", function(Img){
		objectb=Img;
		objectb.scaleToWidth(50);
		objectb.scaleToHeight(50);
		objectb.set({
			top:bally,
			left:ballx
		});
		canvas.add(objectb);
	})
	// write code to Upload ball image on canvas
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if((ballx==netx)&&(bally==nety)){
canvas.remove(objectb);
document.getElementById("hd3").innerHTML="You Have Hit The Goal :DD!";
document.getElementById("canvasy").style.borderColor="red";
	}

	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(bally>=0){
			bally=bally-block_image_height;
			console.log("If up is pressed, X= "+ballx+" ,Y= "+bally);
			canvas.remove(objectb);
			new_image();
			// Write a code to move ball upward.
		}
		
	}

	function down()
	{
		if(bally<=450){
			bally=bally+block_image_height;
			console.log("If up is pressed, X= "+ballx+" ,Y= "+bally);
			canvas.remove(objectb);
			new_image();
			 // Write a code to move ball downward.
		}
		
	}

	function left()
	{
		if(ballx>=0)
		{	ballx=ballx-block_image_width;
			console.log("If up is pressed, X= "+ballx+" ,Y= "+bally);
			canvas.remove(objectb);
			new_image();
			// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ballx<=1050)
		{
		ballx=ballx+block_image_width;
		console.log("If up is pressed, X= "+ballx+" ,Y= "+bally);
		canvas.remove(objectb);
		new_image();
		}
	}
	
}

