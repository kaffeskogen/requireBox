require.config({
    baseUrl: 'js',
    paths: {
        'jquery': 'lib/jquery-1.11.2.min'
    }
});

require(['jquery'], function($) {
    $('#text').css('background-color', 'blue');
});