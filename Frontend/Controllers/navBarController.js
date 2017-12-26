app.controller("navBarController", function ($scope, $state, $stateParams, userService, companyService) {
  // logout function
  $scope.logout = function(){
    userService.setCurrentUser(0);
    companyService.setCurrentCompany(0);
    $state.go("home");
  }
 
})