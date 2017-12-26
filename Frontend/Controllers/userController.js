app.controller("userController", function ($scope, $state, $stateParams, userService) {

  // required are hidden on inital page load
  $scope.firstNameRequired = true;
  $scope.lastNameRequired = true;
  $scope.DOBRequired = true;
  $scope.emailRequired = true;
  $scope.passwordRequired = true;
  $scope.locationRequired = true;
  $scope.genderRequired = true;

  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user
      console.log($scope.user)
    })
  }
  else {
    userService.getUserById($stateParams.id, function (user) {
      $scope.user = user
      console.log($scope.user)
    })
  }

  //submits signup form
  $scope.newUserSubmit = function () {
    // if any form input is empty then run next if else 
    if (($scope.user.firstName == "")
      || ($scope.user.lastName == "")
      || ($scope.user.age == "")
      || ($scope.user.email == "")
      || ($scope.user.password == "")
      || ($scope.user.gender == "")
      || ($scope.user.city == "")) {

      $scope.firstNameRequired = true;
      $scope.lastNameRequired = true;
      $scope.DOBRequired = true;
      $scope.emailRequired = true;
      $scope.passwordRequired = true;
      $scope.locationRequired = true;
      $scope.genderRequired = true;

      if ($scope.user.firstName == "") {
        $scope.firstNameRequired = false;
      }

      if ($scope.user.lastName == "") {
        $scope.lastNameRequired = false;
      }

      if ($scope.user.age == "") {
        $scope.DOBRequired = false;
      }

      if ($scope.user.email == "") {
        $scope.emailRequired = false;
      }

      if ($scope.user.password == "") {
        $scope.passwordRequired = false;
      }

      if ($scope.user.gender == "") {
        $scope.genderRequired = false;
      }

      if ($scope.user.city == "") {
        $scope.locationRequired = false;
      }
    }
    //if everything is filled out in signup form this funciton is run and inputs passed in 
    else {
        console.log($scope.user)
        userService.newUserForm($scope.user);
        // holds userEmail in service for search in successpage
        userService.userEmail($scope.user.email);
        $state.go("userSuccessPage");
    }
  }
  
  //loads new user to dashboardview, sets new userID for currentUserID
  $scope.redirect = function(){
    userService.getUsers().then(function(response){
      for(var i = 0; i < response.data.length; i++){
        if(response.data[i].email == userService.returnEmail()){
          userService.setCurrentUser(response.data[i].id);
        }
      }
      $state.go("dashboard");
    })
  }
})
