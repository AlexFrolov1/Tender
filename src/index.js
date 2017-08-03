var $ = require('jquery');

var str = 'wert';

var App = function() {
    $('body').html(str);
};

var app = new App();
app.get = function() {};

