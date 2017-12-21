app.service("userService", function ($http) {

    this.newUserForm = function(user){
      return $http.get("http://localhost:5000/")
    }
  
})
