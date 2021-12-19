class papel
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:1.2
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			push()
			imageMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//ellipse(0,0,this.r, this.r);
			image(this.image,this.body.position.x,this.body.position.y,this.r,this.r );
			pop()
			
	}

}