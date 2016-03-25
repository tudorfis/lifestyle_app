define([], function(){
    'use strict';
    var isDev = (window.location.hostname.indexOf('localhost') != -1),
        configObj = {
            url: 'localhost',
            firebaseUrl: 'https://tudorfis.firebaseio.com/',
            defaultLanguage: 'ro'
        };
    return configObj;
});