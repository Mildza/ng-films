
var app = angular.module('myApp', ['ngSanitize']).config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});


app.controller('movies', function($scope, $http, $sce) {
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
      // console.log(niz);
      var y = niz.length;
    $scope.val=[];
      if ( y > 1 ) {
        for (var i = 0; i < y; i++) {
          if (niz[i] == "akcija") {
          $scope.val.push(niz[i]);
        } else if (niz[i] == "komedija") {
          $scope.val.push(niz[i]);
        } else if (niz[i] == "triler") {
          $scope.val.push(niz[i]);
        }
        };
        // console.log(val);
        //return ($scope.val);

      };
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
