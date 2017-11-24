(function(){
    'use strict'
    
    angular.module('FazTudo').controller('listaController', function($scope, $rootScope){

        if(!$rootScope.listar){
            $rootScope.listar = [];
        }

        $scope.listar.push($rootScope.listaDeDadosMaster);
        
    });
})();