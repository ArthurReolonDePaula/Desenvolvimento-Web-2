(function() {
    'use strict';

    angular
        .module('CalculadoraSPA')
        .controller('somaController', function($scope, $rootScope){
            $scope.objetoGuardaAtributo = {valor1: '', valor2: ''};   

            $scope.resultado = 0;

            $scope.somar = function(parametroDoEventoSomar){
                $scope.resultado = parseInt(parametroDoEventoSomar.valor1) 
                + parseInt(parametroDoEventoSomar.valor2);
            }
        });
})();