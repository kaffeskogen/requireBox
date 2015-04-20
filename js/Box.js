define(['jquery'], function($) {
    var Box = function(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    Box.prototype = {
        getHeight: function() {
            return this.height;
        },

        draw: function(ctx) {
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    };

    return Box;
});