'use strict';
var myapp=angular.module('myapp',['ngRoute']);


myapp.config(function($routeProvider) {
  $routeProvider

    .when('/home', {
      templateUrl : 'html/home.html',
      controller  : 'TimeController'
    })

    // route for the todo page
    .when('/todo', {
      templateUrl : 'html/todo.html',
      controller  : 'TodoController'
    })
    .when('/about', {
      templateUrl : 'html/about.html',
      controller  : 'AboutController'
    })

    // route for the default page
    .when('/',{
      redirectTo : '/home'
    });
});


myapp.run(function ($rootScope) {
    document.addEventListener("keyup", function (e) {
        if (e.keyCode == '27') {
            $rootScope.$broadcast("escapePressed", e.target);
        }
    });

    document.addEventListener("click", function (e) {
        $rootScope.$broadcast("documentClicked", e.target);
    });
    document.addEventListener("backbutton",function(e){
      navigator.app.exitApp();
    },false);
});
