(function(){
    'use strict'

    angular.module('FazTudo').controller('incluiNaListaController', function($scope, $rootScope){
        $scope.objetoGuardaAtributo = {nome: '', status: '', descricao: ''};

        if(!$rootScope.listaMaster){
            $rootScope.listaMaster = [];
        }

        $scope.incluirInfo = function(objetoGuardaAtributo){
            $rootScope.listaMaster.push(objetoGuardaAtributo);
            console.log($rootScope.listaMaster);
            $scope.objetoGuardaAtributo = {nome: '', status: '', descricao: ''};
        }
    });
})();