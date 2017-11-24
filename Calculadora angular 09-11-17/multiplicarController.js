(function() {
    'use strict';

    angular
        .module('CalculadoraSPA')
        .controller('multiplicarController', function($scope, $rootScope){
            $scope.objetoGuardaAtributo = {valor1: '', valor2: ''};

            $scope.resultado = 0;

            $scope.multiplicar = function(parametroDoEventoMultiplicar){
                $scope.resultado = parseInt(parametroDoEventoMultiplicar.valor1)
                * parseInt(parametroDoEventoMultiplicar.valor2);
            }
        });
})();