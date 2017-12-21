app.service("userService", function ($http) {

//get verify username and password
this.getUserAccess(username, password){
  return $http.get("")
}
  
})
