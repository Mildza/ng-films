
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
});
