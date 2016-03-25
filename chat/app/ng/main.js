'use strict';
require.config({
    baseUrl: './ng',
    paths: {
        'jquery': '../lib/jquery/dist/jquery.min',
        'bootstrap': '../lib/bootstrap/dist/js/bootstrap.min',
        'firebase': '../lib/firebase/firebase',
        'angular': '../lib/angular/angular.min',
        'angular-route': '../lib/angular-route/angular-route.min'
    },
    shim: {
        'app': {
            deps: ['bootstrap', 'firebase', 'angular', 'angular-route']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']
        }
    }
});

require(['app'], function(app){
    angular.bootstrap(document, ['app']);
});
