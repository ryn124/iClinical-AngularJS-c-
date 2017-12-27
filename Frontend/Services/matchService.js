app.service("matchService", function ($http) {
  // get our users  
  this.getUsers = function(){
      return $http.get("http://localhost:5000/api/users")
  }
  this.getAUser = function (id) {
    return $http.get("http://localhost:5000/api/users/" + id)
  }
  // searches the api with input
  this.getApi = function(condition){
    console.log(condition);
    return $http.get("https://api.opentrials.net/v1/search?q="+ condition + "%20age%2025&page=1&per_page=100");
  }


  //Company searches trial by Name and returns results
  this.getTrialsByName = function(name){
    
  }
})
  