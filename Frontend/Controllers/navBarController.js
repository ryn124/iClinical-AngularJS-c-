app.controller("navBarController", function ($scope, $state, $stateParams, userService) {
  // logout function
  $scope.logout = function(){
    userService.setCurrentUser(0);
    $state.go("home");
  }
 
})