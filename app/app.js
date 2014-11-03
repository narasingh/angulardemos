var app = angular.module('orderApp', ['ngRoute','ngAnimate', 'toaster']);


app.config(function ($routeProvider) {
    $routeProvider
		//redirect to login if guest has not logged in
		.when('/login', 
			{
				controller: 'CustomerLoginController',
				templateUrl : 'app/partials/login.html'
			})
        .when('/customers',
            {
                controller: 'CustomersController',
                templateUrl: 'app/partials/customers.html'
            })
        //define route with route parameter as orderID
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: 'app/partials/customerOrders.html'
            })
        .when('/orders',
            {
                controller: 'OrdersController',
                templateUrl: 'app/partials/orders.html'
            })
        .otherwise({ redirectTo: '/login' });
});




