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
  // sets checkboxes to false by default
  //   $scope.blood;
  //   $scope.cancer;
  //   $scope.cardio;
  //   $scope.congenital;$scope.ear;
  //   $scope.infection;
  //   $scope.inflame;
  //   use$scope.injury;
  //   userFor$scope.mental;
  //   user$scope.metabolic;
  //   userForm.m$scope.muscle;
  //   userFor$scope.brain;
  //   userF$scope.oral;
  //   $scope.renal;
  //   userFor$scope.reproductive;
  //   userFo$scope.lung;
  // $scope.skin;
  //   u$scope.stroke;
  //   us$scope.generic;
  //   $scope.other;
  //   us$scope.obese;
  //   userFo$scope.sendentary;
  //   userFo$scope.diet;
  //   use$scope.smoker;
  //   user$scope.drinker;
  //   userForm.hasHig$scope.bloodPressure;
  //   userForm.hasH$scope.cholesterol;



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


      // var userForm = ({firstName: + $scope.firstName})
        userService.newUserForm($scope.user)
      //   // $state.go('app.userCard', {id: userService.getNewId()})
    
    }
  }

})
