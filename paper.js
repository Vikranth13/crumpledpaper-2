class paper{
	constructor(x,y,r)
	{
		
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:3.2
			
		}
		
		this.x = x;
		this.y = y;
		this.r = r
		this.body = Bodies.circle(this.x, this.y, (this.r-25)/2, options)
		this.image = loadImage("images/paper.png");
		World.add(world, this.body);
	

	}
	display()
	{
			
			var paperPosition = this.body.position;		

			push()
			translate(paperPosition.x, paperPosition.y);
			imageMode(CENTER)
			
			//fill("white")
			image(this.image,0,0,this.r,this.r);
			
			pop()
			
	}

}