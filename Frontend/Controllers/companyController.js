app.controller("companyController", function ($scope, $state, $stateParams, companyService) {

  //populates studies to dummy companies id:1,2,3
  // $scope.addStudy = function () {
  //     companyService.getStudies()
  //         .then(function (response) {
  //             var arr = response.data.items;
  //             for (var i = arr.length-1; i >= 0; i--) {
  //                 if (arr[i].id.charAt(0) != "a") {
  //                     response.data.items.splice(i, 1);
  //                 }
  //             }
  //             var newArr = []
  //             //extracts prop
  //           for (var i = 0; i < arr.length; i++){
  //               var study = {};
  //               study.id = arr[i].id;
  //             //   study.studyTitle = arr[i].public_title;
  //             //   study.briefSummary = arr[i].brief_summary;
  //             //   study.gender = arr[i].gender;
  //             //   study.status = arr[i].status; 
  //             //   study.sampleSize = arr[i].target_sample_size.toString();
  //               newArr.push(study);
  //           }
  //           var company = ({"Id": 1, "CompanyName": "Alternative Studes INC", "CompanyUserName": "ALTMEDINC", "CompanyPassword": "iclinical", "Phone" : "7145555555", "Description": "We are Alternative Studies INC. We collectivley research hundreds on new studies daily. Thank you for your intrest in our Company.", "Email": "ALTMEDINC@iclinical.com", "City": "Mexico City", "studies": newArr})
  //             console.log(company)
  //           companyService.setupCompanies(1, company)
  //           })
  //         }

  // $scope.addStudy();

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
  }
  else {
    companyService.getCompanyById($stateParams.id, function (company) {
      $scope.company = company
      console.log($scope.company)
    })
  }

  //submits company signup form
  $scope.newCompanySubmit = function () {
    // if any form input is empty then run next if else 
    if (($scope.company.companyName == "")
      || ($scope.company.companyUserName == "")
      || ($scope.company.phone == "")
      || ($scope.company.email == "")
      || ($scope.company.companyPassword == "")
      || ($scope.company.city == "")
      || ($scope.company.description == "")
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
      console.log($scope.company)
      companyService.newCompanyForm($scope.company)
      companyService.getAllCompanies()
        .then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].companyUserName == $scope.company.companyUserName) {
              companyService.setCurrentCompany(response.data[i].id)
            }
          }
          console.log(companyService.currentCompanyReturn())
        })
    }
  }

  // $state.go('companyDashboard', {id: companyService.currentCompanyReturn()})

})
