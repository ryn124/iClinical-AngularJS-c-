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
                  var study = {};
                  study.id = arr[i].id;
                  study.studyTitle = arr[i].public_title;
                  study.briefSummary = arr[i].brief_summary;
                  study.gender = arr[i].gender;
                //   study.status = arr[i].status; 
                  study.sampleSize = parseInt(arr[i].target_sample_size);
                  newArr.push(study);
              }
              var company = ({"Id": 1, "CompanyName": "sgfdsgfdAlternative Studes INC", "CompanyUserName": "ALTMEDINC", "CompanyPassword": "iclinical", "Phone" : "7145555555", "Description": "We are Alternative Studies INC. We collectivley research hundreds on new studies daily. Thank you for your intrest in our Company.", "Email": "ALTMEDINC@iclinical.com", "City": "Santa Ana", "studies": newArr})
                console.log(company)
              companyService.setupCompanies(1, company)
              })
            }

    $scope.addStudy();

})
