"use strict"

angular.module("miapp").controller("clienteController", function($scope, $http){
    $scope.crearCliente = function(){
        $http.post("https://express-juankprz1.c9users.io/crearcliente", {
            name : $scope.name,
            lastName : $scope.lastName,
            tel : $scope.tel
        }).success(function(respuesta){
            
        }).error(function(respues){
            
        });
    }
})