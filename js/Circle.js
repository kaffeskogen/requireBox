define(['Box'], function(Box) {

    // Clones an object
    function clone(obj) {
        if (obj === null || typeof(obj) !== 'object')
            return obj;

        var temp = obj.constructor();

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                temp[key] = clone(obj[key]);
            }
        }

        return temp;
    }

    // Only need 3 variables is needed in a circle
    var Circle = function(width, x, y) {

        // This is the "same" as 
        //   new Box(width, 0, x, y)
        Box.call(this, width, 0, x, y);
    }

    // Copies all of boxs' prototype functions
    Circle.prototype = clone(Box.prototype);

    Circle.prototype.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width/2, 0, 2*Math.PI);
        ctx.stroke();
    }

    return Circle;
});