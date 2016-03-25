define(['app'], function(app) {
    'use strict';
    app.controller('ChatCtrl', ['$scope', '$rootScope', 'config', function ($scope, $rootScope, config) {

        console.log(config);

        var s = $scope,
            rs = $rootScope,
            dataRef = new Firebase('https://tudorfis.firebaseio.com/chat');

        s.messages = [];

        s.sm = {
            user: "Tudor",
            message: ""
        };

        dataRef.on('child_added', function(snapshot){
            s.messages.push(snapshot.val());
        });

        s.sendMessage = function() {
            dataRef.push({
                user: s.sm.user,
                message: s.sm.message
            });
            s.sm.message = "";
        }

    }]);
});