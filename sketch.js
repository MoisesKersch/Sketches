var s;

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
