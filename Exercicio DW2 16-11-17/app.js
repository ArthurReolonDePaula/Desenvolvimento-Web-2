(function() {
    'use strict'
/**TodasAsFuncoes é o nome do modulo*/

    var funcaoList = angular.module('TodasAsFuncoes', ["ngRoute"]);

    funcaoList.config(function($routeProvider) {
        $routeProvider
            .when("/excluir", {templateUrl: "excluidos.html"})
            .when("/pendente", {templateUrl: "pendente.html"})
            .when("/cancelado", {templateUrl: "cancelado.html"})
            .when("/todos", {templateUrl: "todos.html"})
            .otherwise({redirectTo: '/'});
    });
})();


