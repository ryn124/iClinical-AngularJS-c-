app.controller("matchController", function ($scope, $state, $stateParams, matchService) {
  // $scope.apiResponse = null;
  $scope.clinicalSearch = function() {
    matchService.getApi()
      .then(function (response){
        console.log(response.data.items)
        $scope.apiResponse = response.data.items;
        console.log($scope.apiResponse);
        console.log($scope.apiResponse[0].conditions[0]);
      })
  }

  $scope.clinicalSearch();


})
  