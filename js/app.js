
var app = angular.module('myApp', []);

app.controller('movies', function($scope, $http) {
    $http.get("http://mildza.freehostia.com/filmovi.php")
    .then(function (response) {$scope.filmovi = response.data.records;});

$scope.by = "br.komentara";
$scope.reverse = false;
$scope.orderByMe = function(by) {
  $scope.reverse = ($scope.by === by) ? !$scope.reverse : true;
      $scope.by = by;
}


$scope.genre = function(z) {

    var niz = z.split(" ");
    console.log(niz);
    var y = niz.length;
    if ( y > 1 ) {

      for (var i = 0; i < y; i++) {
      if (niz[i] = "komedija") {
        
      }

      }
      if (z === ) {
        console.log(z);
        return "akcija";

      } else if (z === "drama") {
        return "drama";
      }

    } else {
      return z;
    }


};


});
