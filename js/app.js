
var app = angular.module('myApp', []);

app.controller('movies', function($scope, $http) {
    $http.get("http://mildza.freehostia.com/filmovi.php")
    .then(function (response) {$scope.filmovi = response.data.records;});

$scope.orderByMe = function(x) {
    $scope.myOrderBy = x;
}
});
