var app = angular.module('profile-app', ['ui.router']);

// app.config(function($routeProvider){
//
//   $routeProvider
//     .when('/home', {
//       templateUrl: 'views/home.html',
//       controller: function($scope){
//         $scope.viewTitle = '';
//       }
//     })
//     .when('/experience', {
//       templateUrl: 'views/experience.html',
//       controller: function($scope){
//         $scope.viewTitle = 'Experience';
//       }
//     });
//
//   $routeProvider.otherwise('/home');
// });

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('/home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: function($scope){
        $scope.setTitle('About me');
      }
    })
    .state('/experience', {
      url: '/experience',
      templateUrl: 'views/experience.html',
      controller: function($scope){
        $scope.setTitle('My Experience');
      }
    })
    .state('/contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: function($scope){
        $scope.setTitle('Contact me');

        $scope.setValues = function(name, email){
          $scope.setName(name);
          $scope.setEmail(email);
        }
      }
    })
    .state('/thankYou', {
      url: '/thankYou',
      templateUrl: 'views/thankYou.html',
      controller: function($scope, $location){
        $scope.setTitle('');

        setTimeout(function(){
          window.location = '#/home';
        }, 8000);
      }
    });

    $urlRouterProvider.otherwise('/home');

});

app.controller('profile-controller', function($scope){
  $scope.viewTitle = '';
  $scope.name = '';
  $scope.email = '';

  $scope.setTitle = function(title){
    $scope.viewTitle = title;
  }
  $scope.setName = function(name){
    $scope.name = name;
  }
  $scope.setEmail = function(email){
    $scope.email = email;
  }
});
