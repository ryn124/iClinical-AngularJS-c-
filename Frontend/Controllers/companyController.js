app.controller("companyController", function ($scope, $state, $stateParams, companyService, matchService, userService) {
  if (companyService.currentCompanyReturn() == 0 && userService.currentUserReturn() == 0) {
    $state.go("dashboard");
  } else if (companyService.currentCompanyReturn() == 0) {
    $state.go("home");
  }

  //hides form verification upon initial page load
  $scope.companyName = true;
  $scope.companyUsername = true;
  $scope.companyPhone = true;
  $scope.companyEmail = true;
  $scope.companyPass = true;
  $scope.companyCity = true;
  $scope.companyDescription = true;

  if ($stateParams.id == "" || $stateParams.id == undefined || $stateParams.id == null) {
    companyService.getCompanyById($stateParams.id, function (company) {
      $scope.company = company
      console.log($scope.company)
    })
  } else {
    companyService.getCompanyById($stateParams.id, function (company) {
      $scope.company = company
      console.log($scope.company)
    })
  }

  //submits company signup form
  $scope.newCompanySubmit = function () {
    // if any form input is empty then run next if else 
    if (($scope.company.companyName == "") ||
      ($scope.company.companyUserName == "") ||
      ($scope.company.phone == "") ||
      ($scope.company.email == "") ||
      ($scope.company.companyPassword == "") ||
      ($scope.company.city == "") ||
      ($scope.company.description == "")
    ) {
      $scope.companyName = true;
      $scope.companyUsername = true;
      $scope.companyPhone = true;
      $scope.companyEmail = true;
      $scope.companyPass = true;
      $scope.companyCity = true;
      $scope.companyDescription = true;

      if ($scope.company.companyName == "") {
        $scope.companyName = false;
      }

      if ($scope.company.companyUserName == "") {
        $scope.companyUsername = false;
      }

      if ($scope.company.phone == "") {
        $scope.companyPhone = false;
      }

      if ($scope.company.email == "") {
        $scope.companyEmail = false;
      }

      if ($scope.company.companyPassword == "") {
        $scope.companyPass = false;
      }

      if ($scope.company.description == "") {
        $scope.companyDescription = false;
      }

      if ($scope.company.city == "") {
        $scope.companyCity = false;
      }

    }
    //if everything is filled out in signup form this function is run and inputs passed in 
    else {
      companyService.newCompanyForm($scope.company);
      companyService.holdUsername($scope.company.companyUserName);
      $state.go("successPage");
    }
  }

  //success page redirect page load via id number to dashboard
  $scope.companyRedirect = function () {
    companyService.getAllCompanies().then(function (response) {
      for (var i = 0; i < response.data.length; i++) {
        if (response.data[i].companyUserName == companyService.returnUsername()) {
          companyService.setCurrentCompany(response.data[i].id);
          $state.go("companyDashboard");
          //ADD NG-HIDE AND UNHIDE COMPANY DASHBOARD ON NAVBAR HERE!!
        }
      }
    })
  }

  //loads company dashboard 
  $scope.loadCompanyDash = function () {
    companyService.getCurrentCompanyInfo().then(function (response) {
      $scope.currentCompany = response.data
    })
  }

  $scope.loadCompanyDash();

  //searches trials and populates dashboard with search results
  $scope.searchStudies = function (trialName) {
    matchService.getApi(trialName).then(function (response) {
      $scope.searchedTrials = response.data.items;
    })
  }

  // adds selected searched item to backend. Makes new instance of study in backend with company id in it
  $scope.addStudy = function (trial) {
    var searched = ({
      studyId: trial.id,
      studyTitle: trial.public_title,
      briefSummary: trial.brief_summary,
      gender: trial.gender,
      status: trial.status,
      sampleSize: trial.target_sample_size,
      companyId: companyService.currentCompanyReturn()
    });
    companyService.postStudyCompany(searched);
    companyService.getAllStudies().then(function (response) {
      $scope.companyStudies = [];
      for (var i = 0; i < response.data.length; i++) {
        if (companyService.currentCompanyReturn() == response.data[i].companyId) {
          $scope.companyStudies.push(response.data[i]);
        }
      }
    })
  }

  //compnay deletes studies from backend
  $scope.deleteStudy = function (study) {
    companyService.deleteStudy(study.id)
  }
})