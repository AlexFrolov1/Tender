var $ = require('jquery');
require('./sass');

var str = 'wert';

var App = function() {
    $('body').html(str);
};

var app = new App();
app.get = function() {};

