var app = angular.module("spotApp", ['ui.router', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/")

  $stateProvider

    .state("user", {
      url: "/user",
      templateUrl: "./views/user.html",
      controller: "userController"

    })


})