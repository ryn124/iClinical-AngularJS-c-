app.service("userService", function ($http) {

  this.newUserForm = function (x) {
    return $http.post("http://localhost:5000/api/users", x)
  }

  this.getUserById = function (id, callback) {
    if (id == "" || id == undefined || id == null) {
      //create empty user object pass user object to callback
      var user = {
        id: 5,
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        blood: false,
        cancer: false,
        cardio: false,
        congenital: false,
        ear: false,
        infection: false,
        inflame: false,
        injury: false,
        mental: false,
        metabolic: false,
        muscle: false,
        brain: false,
        oral: false,
        renal: false,
        reproductive: false,
        lung: false,
        skin: false,
        stroke: false,
        generic: false,
        other: false,
        obese: false,
        sendentary: false,
        diet: false,
        smoker: false,
        drinker: false,
        bloodPressure: false,
        cholesterol: false
      }
      callback(user)
    }
    else {
      //$http using id to get valid user pass valid user back to controller using callback function
    }
  }
})
