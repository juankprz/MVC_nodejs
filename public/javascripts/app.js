'use strict'

angular.module("miapp", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/inicio");
  //
  // Now set up the states
  $stateProvider
    .state('inicio', {
      url: "/inicio",
      templateUrl: "views/inicio.html"
    })
    .state('listado', {
      url: "/listado",
      templateUrl: "views/listado.html"
    })
    .state('crear_cliente', {
      url: "/crear_cliente",
      templateUrl: "views/crear_cliente.html"
    })
    .state('iniciar_sesion', {
      url: "/iniciar_sesion",
      templateUrl: "views/iniciar_sesion.html"
    })
    ;
});