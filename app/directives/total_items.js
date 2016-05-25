'use strict';

angular
	.module("shoppingCart")
	.directive('totalItems', function() {
		return {
			restrict: 'E',
			scope: {
		      cartItems: '=info'
		    },
			templateUrl: 'directives/total_items.html'
		};
	});
