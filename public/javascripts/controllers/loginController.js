"use strict"

angular.module("miapp").controller("loginController", function($scope, $http){
    $scope.login = function(){
        $http.post("https://express-juankprz1.c9users.io/login", {
            email: $scope.email,
            contraseña: $scope.password
            
         }).success(function(respuesta){
            
        }).error(function(respues){
            
        });
    }
})