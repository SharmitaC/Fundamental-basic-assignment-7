// JavaScript Document

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));



function add(x, y) {
    return x+y;
}
console.log(add(2, 3));      // 5
console.log(add(-1, 1));     // 0
 
console.log(add(1, 1, 1));   // 2


