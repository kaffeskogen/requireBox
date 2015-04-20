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
    var c = new Circle(200, 400, 400);

    b.draw(ctx);
    c.draw(ctx);
});