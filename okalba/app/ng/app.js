define([], function(){
    'use strict';
    var app = angular.module('app', ['ngMaterial']);

    app.config(function($mdIconProvider) {
        $mdIconProvider
            .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
            .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    });
    return app;
});