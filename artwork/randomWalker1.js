/*
Random Walker Sketch
*/

var walkerArray = [];
var colorArray = ["#a2c1ff", "#c2d8ff", "#f98aa4", "#9af3bd", "#73afe7", "#ffcf01"];
var resetCount = 0;

const sizeConstrain = 2;
const maxX = window.innerWidth;
const maxY = window.innerHeight;
const maxWalkers = 20;
const distanceWalkers = Math.floor(Math.log2(maxWalkers) * 3);
var canvas;

function setup()
{
    canvas = createCanvas(maxX, maxY);
    canvas.position = (0,0);
    canvas.parent('sketch-holder');
    canvas.style("z-index", '-10');
    canvas.style('display', 'block');
    console.log("RUNNING");
    background(250, 250, 250);

    for (let i = 0; i < maxWalkers; i++)
    {
        var w = new Walker(maxX, maxY);
        walkerArray.push(w);
    }
}

function draw()
{
    for (let i = 0; i < maxWalkers; i++)
    {
        walkerArray[i].drawPos();
        walkerArray[i].nextMove();
    }
}

class Walker
{
    constructor(xSeed, ySeed)
    {
        this.xSeed = xSeed;
        this.ySeed = ySeed;
        this.x = customRand(xSeed);
        this.y = customRand(ySeed);
        this.color = colorArray[customRand(colorArray.length) - 1];
        this.size = customRand(sizeConstrain) + sizeConstrain;
    }
    setVals()
    {
        this.x = customRand(this.xSeed);
        this.y = customRand(this.ySeed);
        this.color = colorArray[customRand(colorArray.length) - 1];
        this.size = customRand(sizeConstrain) + sizeConstrain;
    }
    getPos()
    {
        console.log("x is: ", this.x, "\ny is: ", this.y);
    }
    nextMove()
    {
        if (this.x >= (maxX - 20))
        {
            this.setVals();
            resetCount++;
            console.log("Setting new");
        }
        else
        {
            if (customRand(2) == 1) { this.x = this.x + customRand(distanceWalkers) }
            else { this.x = this.x - customRand(distanceWalkers) }
        }

        if (this.y >= (maxY - 20))
        {
            this.setVals();
            resetCount++;
            console.log("Setting new");
        }
        else
        {
            if (customRand(2) == 1) { this.y = this.y - customRand(distanceWalkers) }
            else { this.y = this.y + customRand(distanceWalkers) }
        }
    }
    drawPos()
    {
        stroke(this.color);
        fill(this.color);
        square(this.x, this.y, this.size, 1);
    }
}

function customRand(max)
{
    return (Math.floor(Math.random() * max) + 1);
}