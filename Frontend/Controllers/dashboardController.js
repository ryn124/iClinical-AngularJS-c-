app.controller("dashboardController", function ($scope, $state, $stateParams, userService, matchService) {
  // loads the current user
  $scope.loadUser = function (){
    userService.getCurrentUserInfo()
    .then(function(response){
      console.log(response.data)
      $scope.loadedUser = response.data;
    })
  }
  $scope.loadUser();
})