(function() {
    'use strict';

    angular
        .module('CalculadoraSPA')
        .controller('dividirController', function($scope, $rootScope){
            $scope.objetoGuardaAtributo = {valor1: '', valor2: ''};

            $scope.resultado = 0;

            $scope.dividir = function(parametroDoEventoDividir){
                $scope.resultado = parseInt(parametroDoEventoDividir.valor1)
                / parseInt(parametroDoEventoDividir.valor2); 
            }
        });

    
})();