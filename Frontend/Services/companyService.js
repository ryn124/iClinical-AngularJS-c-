app.service("companyService", function ($http) {

  // // gets data from study api for dummy data
  // this.getStudies = function(){
  //   return $http.get("https://api.opentrials.net/v1/search?q=a&page=1&per_page=100");
  // }

  // // }
  // // populates studies to dummy companies id:1,2,3
  // this.setupCompanies = function(id, data){
  //   return $http.put("http://localhost:5000/api/companies/" + id, data)
  // }

  //POSTS NEW COMPANY
   // posts a user
   this.newCompanyForm = function (x) {
    return $http.post("http://localhost:5000/api/companies", x)
  }

  //GETS COMPANY by ID
  this.getCompanyById = function (id, callback) {
    if (id == "" || id == undefined || id == null) {
      //create empty user object pass user object to callback
      var company = {
        companyName: "",
        companyUserName: "",
        companyPassword: "",
        phone: "",
        description: "",
        email: "",
        city: ""
      }
      callback(company)
    }
    else {
      return $http.get("http://localhost:5000/api/companies/" + id)
    }
  }

  //gets all companies
  this.getAllCompanies = function(){
    return $http.get("http://localhost:5000/api/companies")
  }
  
  // login for company
  var _currentCompanyId = 0;
  this.setCurrentCompany = function (id){
    _currentCompanyId = id;
  }
  // returns logged on company' id
  this.currentCompanyReturn = function(){
    return _currentCompanyId;
  }
  this.getCurrentCompanyInfo = function(){
    console.log(_currentCompanyId)
    return $http.get("http://localhost:5000/api/Companies/" + _currentCompanyId)
  }

})
  