(function() {
    'use strict'

    angular.module('TodasAsFuncoes').controller('exclusaoController', function($scope, $rootScope){
        
        if(!$scope.listaDeExcluidos){
            $scope.listaDeExcluidos = [];
        }
        
        for (var contador = 0; contador < $rootScope.listaDeDadosMaster.length; contador ++) {
            if ($rootScope.listaDeDadosMaster[contador].status === 'excluido') {
                $scope.listaDeExcluidos.push($rootScope.listaDeDadosMaster[contador]);
            }
        }
    
    });
})();