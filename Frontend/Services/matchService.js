app.service("matchService", function ($http) {
  
  this.getApi = function(x){
    return $http.get("https://api.opentrials.net/v1/search?q=cancer")
  }
  this.getUsers = function(x){
    return $http.get("http://localhost:5000/api/user")
  }
    
  })
  