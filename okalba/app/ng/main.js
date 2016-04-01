'use strict';
require.config({
    baseUrl: './ng',
    paths: {
        'angular': '../lib/angular/angular.min',
        'angular-animate': '../lib/angular-animate/angular-animate.min',
        'angular-aria': '../lib/angular-aria/angular-aria.min',
        'angular-messages': '../lib/angular-messages/angular-messages.min',
        'angular-material': '../lib/angular-material/angular-material.min'
    },
    shim: {
        'app': {
            deps: ['angular', 'angular-animate', 'angular-aria', 'angular-messages', 'angular-material']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-material': {
            deps: ['angular']
        }
    }
});

require(['app'], function(app){
    angular.bootstrap(document, ['app']);
});
