(function(){
    'use Strict'

    var app = angular.module('CalculadoraSPA', ['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when("/somar", {templateUrl: "somar.html"})
            .when("/subtrair", {templateUrl: "subtrair.html"})
            .when("/multiplicar", {templateUrl: "multiplicar.html"})
            .when("/dividir", {templateUrl: "dividir.html"})
            .otherwise({redirectTo: '/'});
    });
})();