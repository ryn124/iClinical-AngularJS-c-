app.service("companyService", function ($http) {

  // gets data from study api for dummy data
  this.getStudies = function(){
    return $http.get("https://api.opentrials.net/v1/search?q=a&page=1&per_page=100");
  }

  // }
  // populates studies to dummy companies id:1,2,3
  this.setupCompanies = function(id, data){
    return $http.put("http://localhost:5000/api/companies/" + id, data)
  }
})
  