define(['Box'], function(Box) {
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

    var Circle = function(width, height, x, y) {
        Box.call(this, width, height, x, y);
    }

    Circle.prototype = clone(Box.prototype);

    Circle.prototype.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width/2, 0, 2*Math.PI);
        ctx.stroke();
    }

    return Circle;
});