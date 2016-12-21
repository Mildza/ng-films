
var app = angular.module("myApp", ['ngAnimate']);

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
    $scope.val=[];
    $scope.niz = z.split(" ");
    $scope.niz = $scope.niz.filter(Boolean);
  };

  $scope.rank = function(stars) {
    var mark;
    if (stars == 5) {
      mark = "ocena5";
      return mark;
    } else if (stars == 4) {
      mark = "ocena4";
      return mark;
    } else if (stars == 3) {
      mark = "ocena3";
      return mark;
    } else if (stars == 2) {
      mark = "ocena2";
      return mark;
    } else if (stars == 1) {
      mark = "ocena1";
      return mark;
    } else if (stars == 0) {
      mark = "ocena0";
      return mark;
    }
  };
});

app.directive("genreReturn", function() {
  return {
  templateUrl: 'directives/genrereturn.html',
  replace: true
  }
});
