app.controller("loginController", function ($scope, $state, $stateParams, userService) {
  //Login function
  $scope.userLogin = function(){
    userService.getUserAccess($scope.userName, $scope.password)
    .then(function (response) {
      
    })
}
 
    
})
  