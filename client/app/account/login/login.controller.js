'use strict';

angular.module('qumramApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    console.log("MVC: LoginCtrl");
    $scope.login = function(form) {
        $scope.submitted = true;

        if(form.$valid) {
          Auth.login({
            email: $scope.user.email,
            password: $scope.user.password
          })
          .then( function() {
            // Logged in, redirect to home
            $location.path('/main');
          })
          .catch( function(err) {
            $scope.errors.other = err.message;
          });
        }
    };

  });
