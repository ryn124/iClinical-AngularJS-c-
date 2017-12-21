app.service("matchService", function ($http) {
  
  this.getApi = function(x){
    return $http.get("https://api.opentrials.net/v1/search?q=" + x)
  }
    
  })
  