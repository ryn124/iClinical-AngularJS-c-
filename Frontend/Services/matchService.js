app.service("matchService", function ($http) {
  // get our users  
  this.getUsers = function(x){
      return $http.get("http://localhost:5000/api/users")
  }
  // searches the api with input
  this.getApi = function(condition){
    console.log(condition);
    return $http.get("https://api.opentrials.net/v1/search?q="+ condition + "%20age%2025&page=1&per_page=100");
  }
  this.getApiTwo = function(condition){
    console.log(condition);
    return $http.get("https://api.opentrials.net/v1/search?q="+ condition + "%20age%2025&page=2&per_page=100");
  }
  this.getApiThree = function(condition){
    console.log(condition);
    return $http.get("https://api.opentrials.net/v1/search?q="+ condition + "%20age%2025&page=3&per_page=100");
  }


  //Company searches trial by Name and returns results
  this.getTrialsByName = function(name){
    
  }
})
  