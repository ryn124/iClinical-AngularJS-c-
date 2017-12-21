app.controller("userController", function ($scope, $state, $stateParams, userService) {

  // required are hidden on inital page load
  $scope.firstNameRequired = true;
  $scope.lastNameRequired = true;
  $scope.DOBRequired = true;
  $scope.emailRequired = true;
  $scope.passwordRequired = true;
  $scope.locationRequired = true;
  $scope.genderRequired = true;
  //submits signup form
  $scope.newUserSubmit = function () {
    //if any form input is empty then run next if else 
    if (($scope.firstName == "" || $scope.firstName == null)
      || ($scope.lastName == "" || $scope.lastName == null)
      || ($scope.age == "" || $scope.age == null)
      || ($scope.email == "" || $scope.email == null)
      || ($scope.password == "" || $scope.password == null)
      || ($scope.gender == "" || $scope.gender == null)
      || ($scope.location == "" || $scope.location == null)) {

      if ($scope.firstName == "" || $scope.firstName == null) {
        $scope.firstNameRequired = false;
      } else { $scope.firstNameRequired = true; }
      if ($scope.lastName == "" || $scope.lastName == null) {
        $scope.lastNameRequired = false;
      } else { $scope.lastNameRequired = true; }
      if ($scope.age == "" || $scope.age == null) {
        $scope.DOBRequired = false;
      } else { $scope.DOBRequired = true; }
      if ($scope.email == "" || $scope.email == null) {
        $scope.emailRequired = false;
      } else { $scope.emailRequired = true; }
      if ($scope.password == "" || $scope.password == null) {
        $scope.passwordRequired = false;
      } else { $scope.passwordRequired = true; }
      if ($scope.location == "" || $scope.location == null) {
        $scope.locationRequired = false;
      } else { $scope.locationRequired = true; }
      if ($scope.gender == "" || $scope.gender == null) {
        $scope.genderRequired = false;
      } else { $scope.genderRequired = true; }
    }
    //if everything is filled out in signup form this funciton is run and inputs passed in 
    else {
      userService.newUserForm($scope.user)
      // $state.go('app.userCard', {id: userService.getNewId()})
      console.log("submitted")
    }
  }

})
  