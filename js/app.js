var myApp =   angular.module('myApp',['ngRoute', 'ngAnimate']);


myApp.controller('navController', function ($scope){});

myApp.controller('validationController', function ($scope){
    // function to submit the form
    $scope.submitForm = function(isValid){
      //check to make sure that form is completely valid 
      if(isValid){
          $scope.response = 'Your form is submited susscssfuly';
//            alert('Thanks');
      }
      else{
          $scope.response = '';
      }
    };
});


//Define route for site
myApp.config(['$routeProvider',function ($routeProvider){
        $routeProvider
                .when('/',{
                    title: 'home',
                    templateUrl: 'pages/home.html'
                })
                .when('/process',{
                    title: 'About',
                    templateUrl: 'pages/process.html'
                })
                .when('/contact',{
                    title: 'contact',
                    templateUrl: 'pages/contact.html'
                })

		.when('/research',{
                    title: 'research',
                    templateUrl: 'pages/research.html'
                })
                .when('/brand',{
                    title: 'portfolio',
                    templateUrl: 'pages/brands.html'

                })

		.when('/product',{
                    title: 'portfolio',
                    templateUrl: 'pages/products.html'

                })	

                .otherwise({
                    redirectTo: 'pages/notfound.html'
                });
    }]);
   
 
      