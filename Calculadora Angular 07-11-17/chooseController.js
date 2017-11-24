(function() {
    'use strict';

   var app = angular.module('Calcular', []);

   app.controller('chooseController',function ($scope) {
       
    $scope.resultado = 0;
       $scope.eventoSoma = function(calcular){
            $scope.resultado = parseInt(calcular.valor1) + parseInt(calcular.valor2);
       }

       $scope.eventoSubtracao = function(calcular){
           $scope.resultado = parseInt(calcular.valor1) - parseInt(calcular.valor2);
       }

       $scope.eventoDivisao = function(calcular){
           $scope.resultado = parseInt(calcular.valor1) / parseInt(calcular.valor2);
       }

       $scope.eventoMultiplicacao = function(calcular){
           $scope.resultado = parseInt(calcular.valor1) * parseInt(calcular.valor2);
       }
   });
})();