(function() {
    'use strict';

    angular
        .module('CalculadoraSPA')
        .controller('subtrairController', function($scope, $rootScope){
            $scope.objetoGuardaAtributo = {valor1: '', valor2: ''};

            $scope.resultado = 0;

            $scope.subtrair = function(parametroDoEventoSubtrair){
                $scope.resultado = parseInt(parametroDoEventoSubtrair.valor1) 
                - parseInt(parametroDoEventoSubtrair.valor2);
            }
        });
})();