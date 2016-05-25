'use strict';

angular
	.module("shoppingCart")
	.directive('totalPrice', function(){
		
		var doSum = function (cartItems) {
			if (cartItems.length === 0)
				return {price: 0};
			return cartItems.reduce(
				function(total, item) {
					return {price: total.price + item.price};
				}
			);
		}; 

		return {
			restrict: 'E',
			scope: {
		      cartItems: '=info'
		    },
			templateUrl: 'directives/total_price.html',
			link: function (scope, element, attr) {
				scope.sumTotalPrice = function (cartItems) {
					return doSum(cartItems);
				};
			}
		};
	})