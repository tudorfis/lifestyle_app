define([
    'config/config',
    'config/routes',
    'services/dependencyResolverFor'
], function(configConstant, routesConfig, dependencyResolverFor){
    'use strict';

    var app = angular.module('app', [
        'ngRoute'
    ]);

    app.constant('config', configConstant);
    app.config([
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

            app.controller = $controllerProvider.register;
            app.directive  = $compileProvider.directive;
            app.filter     = $filterProvider.register;
            app.factory    = $provide.factory;
            app.service    = $provide.service;

            if (routesConfig.routes !== undefined) {
                angular.forEach(routesConfig.routes, function(route, path) {
                    $routeProvider.when(path, {
                        templateUrl: route.templateUrl,
                        resolve: dependencyResolverFor(route.dependencies)
                    });
                });
            }

            if (routesConfig.defaultRoutePaths !== undefined) {
                $routeProvider.otherwise({
                    redirectTo: routesConfig.defaultRoutePaths
                });
            }
        }
    ]);

    return app;
});