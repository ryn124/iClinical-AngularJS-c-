app.controller("companyController", function ($scope, $state, $stateParams, companyService) {

    //populates studies to dummy companies id:1,2,3
    $scope.addStudy = function () {
        companyService.getStudies()
            .then(function (response) {
                var arr = response.data.items;
                for (var i = arr.length-1; i >= 0; i--) {
                    if (arr[i].id.charAt(0) != "a") {
                        response.data.items.splice(i, 1);
                    }
                }
                var newArr = []
                //extracts prop
              for (var i = 0; i < arr.length; i++){
                  var studyArr = []
                  studyArr.push(arr[i].id, arr[i].public_title, arr[i].brief_summary, arr[i].gender, arr[i].status, arr[i].target_sample_size)
                  newArr.push(studyArr);
              }
              var company = ({Id = 1, CompanyName = "Alternative Studes INC", CompanyUserName = "ALTMEDINC", CompanyPassword = "iclinical", Phone = "7145555555", Description = "We are Alternative Studies INC. We collectivley research hundreds on new studies daily. Thank you for your intrest in our Company.", Studies: studyArr
              , Email = "ALTMEDINC@iclinical.com", City = "Santa Ana"})

              companyService.setupCompanies(1, company)
              })
            }

    $scope.addStudy();

})
