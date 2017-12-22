app.controller("loginController", function ($scope, $state, $stateParams, userService) {
  //Login function
  // $scope.userLogin = function(){
  //   userService.getUserAccess($scope.userName, $scope.password)
  //   .then(function (response) {
      
  //   })
  // }
  $scope.userWrong = true;
  $scope.userLogin = function(user){

    userService.getUsers()
    .then(function (response){
      for (var i = 0; i < response.data.length; i++) {

        if(response.data[i].email == user.email && response.data[i].password == user.password){
          console.log("this user matches " + response.data[i].firstName);
          $scope.userWrong = true;
          userService.setCurrentUser(response.data[i].id)
          $state.go("dashboard");
        }
        else{
          console.log("no user matches")
          $scope.userWrong = false;
        }
      }
    })
    .catch(function (error){
      console.log(error)
    })
  }
    
})
  