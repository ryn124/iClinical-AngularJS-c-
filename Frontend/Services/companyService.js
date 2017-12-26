app.service("companyService", function ($http) {


  //POSTS NEW COMPANY
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
  // gets company by id
  this.getCurrentCompanyInfo = function(){
    console.log(_currentCompanyId)
    return $http.get("http://localhost:5000/api/companies/" + _currentCompanyId);
  }

  //holds currentuserName for company profle creation
  var userName = null;
  this.holdUsername = function(name){
    userName = name; 
  }
  //returns user name; 
  this.returnUsername = function(){
    return userName; 
  }

})
  