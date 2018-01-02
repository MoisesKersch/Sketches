var s;

function Snake()
{
    createP('this is a text2');
    this.x = 0;
    this.y = 0;
    this.xspeed = .5;
    this.yspeed = 0;
    this.counter =  0;

    this.update = function ()
    {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function()
    {
      fill(255);
      rect(this.x, this.y, 10, 10);
    }
}


function setup()
{
    createCanvas(200,200);
    s = new Snake();
    createP('this is a text');
}

function draw()
{
    background(51);
    s.update();
    s.show();
    createP('this is a text1');
}
