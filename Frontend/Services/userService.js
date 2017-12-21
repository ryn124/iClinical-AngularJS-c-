app.service("userService", function ($http) {

//get verify username and password
this.getUserAccess = function (username, password){
  return $http.get("")
}
  
})
