class paper{
	constructor(x,y,r)
	{
	var options = {
      isStatic:false,
      restitution:0.3,
	  friction:0,
	  density:1.2

	}
		this.x=200;
		this.y=650;
		this.r=50
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		this.image=loadImage("paper.png")
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			
			translate(paperpos.x, paperpos.y);
			
			
			imageMode(CENTER);
			image(this.image, 0, 0, this.width, this.height);
			
	}

}