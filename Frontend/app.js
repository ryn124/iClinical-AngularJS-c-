var app = angular.module("iClinical", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")
  $stateProvider
    .state("home", {
      url: "/login",
      templateUrl: "./views/login.html",
      controller: "loginController"
    })
    .state("user", {
      url: "/user",
      templateUrl: "./views/user.html",
      controller: "userController"
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "./views/signup.html",
      controller: "userController"
    })
    .state("matches", {
      url: "/matches",
      templateUrl: "./views/matches.html",
      controller: "matchController"
    })

})