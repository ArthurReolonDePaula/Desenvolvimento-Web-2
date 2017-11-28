 (function() {
    'use strict'

    angular.module('TodasAsFuncoes').controller('inclusaoController', function($scope, $rootScope){
    
        $scope.objetoGuardaAtributo = {descricao: '', status: ''};

        if(!$rootScope.listaDeDadosMaster){
            $rootScope.listaDeDadosMaster = [];
        }

        $scope.incluirInfo = function(objetoGuardaAtributo) {
            $rootScope.listaDeDadosMaster.push(objetoGuardaAtributo);
            console.log($rootScope.listaDeDadosMaster);
            $scope.objetoGuardaAtributo = {descricao: '', status: ''};
        }
    });
})();
