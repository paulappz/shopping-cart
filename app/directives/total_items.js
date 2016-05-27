'use strict';

angular
	.module("shoppingCart")
	.directive('totalItems', function() {
		return {
			restrict: 'E',
			scope: {
		      cartItems: '=info'
		    },
			templateUrl: 'directives/total_items.html',
			link: function(scope, element, attr) {
				scope.getNumOfCartItems = function(cartItems) {
					var numItems = 0
					Object.keys(cartItems).forEach(function(i){
						numItems += cartItems[i].qty;
					});
					return numItems;
				}
			}
		};
	});
