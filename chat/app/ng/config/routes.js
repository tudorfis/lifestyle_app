define([], function(){
    'use strict';
    return {
        defaultRoutePath: '/',
        routes: {
            '/': {
                templateUrl: 'ng/modules/chat/chat.html',
                dependencies: [
                    'modules/chat/ChatCtrl',
                    'filters/array.filter'
                ]
            }
        }
    };
});