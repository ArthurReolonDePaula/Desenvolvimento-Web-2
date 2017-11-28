(function() {
    'use strict'

    angular.module('TodasAsFuncoes').controller('pendenteController', function($scope, $rootScope){
        
        if(!$scope.listaDePendentes){
            $scope.listaDePendentes = [];
        }
        
        for (var contador = 0; contador < $rootScope.listaDeDadosMaster.length; contador ++) {
            if ($rootScope.listaDeDadosMaster[contador].status === 'pendente') {
                $scope.listaDePendentes.push($rootScope.listaDeDadosMaster[contador]);
            }
        }
    
    });
})();