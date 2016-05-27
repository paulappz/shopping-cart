'use strict';

angular
	.module("shoppingCart")
	.directive('totalPrice', function(){
		
		var doSum = function (cartItems) {
			var totalPrice = 0;
			Object.keys(cartItems).forEach(function(i){
				totalPrice += cartItems[i].qty * cartItems[i].price;
			});
			return totalPrice;
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