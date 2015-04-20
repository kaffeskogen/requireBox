require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-1.11.2.min'
    }
});

require(['jquery', 'Box', 'Circle'], function($, Box, Circle) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var b = new Box(100, 100, 50, 50);
    var b2 = new Box(100, 100, 50, 50);
    var b3 = new Box(100, 100, 50, 50);
    var b4 = new Box(100, 100, 50, 50);


    // var c = new Circle(50, 50, 200, 250);

    b.draw(ctx);
    c.draw(ctx);
});