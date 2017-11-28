(function() {
    'use strict'

    angular.module('TodasAsFuncoes').controller('cancelaController', function($scope, $rootScope){
        
        if(!$scope.listaDeCancelados){
            $scope.listaDeCancelados = [];
        }
        
        for (var contador = 0; contador < $rootScope.listaDeDadosMaster.length; contador ++) {
            if ($rootScope.listaDeDadosMaster[contador].status === 'cancelado') {
                $scope.listaDeCancelados.push($rootScope.listaDeDadosMaster[contador]);
            }
        }
    
    });
})();