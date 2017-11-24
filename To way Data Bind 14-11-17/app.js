(function(){
    'use strict'

    var app = angular.module('FazTudo', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when("/listar", {templateUrl: "lista.html"})
            .otherwise({redirectTo: '/'});
    }); 
})();