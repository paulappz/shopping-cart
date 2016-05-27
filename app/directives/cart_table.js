'use strict';

angular
	.module("shoppingCart")
	.directive('cartTable', ['$compile', function($compile) {
		return {
			restrict: 'E',
			templateUrl: 'directives/cart_table.html',
			replace: true,
			transclude: true,
			link: function (scope, element, attr) {

				scope.$watch(attr.info, function(newValue, oldValue){
	                scope.groupItemsInCart = scope.cartItems;
	            }, true);

				scope.isOutOfStock = function (id){
					return scope.productGroup[id].qty === 0;
				};

	            scope.putBackInStore = function(id) {
	            	scope.groupItemsInCart[id].qty -= 1;
	            	scope.productGroup[id].qty += 1; 	
	            };
	            
	            scope.addMore = function(itemId) {
	            	scope.groupItemsInCart[itemId].qty += 1;
	            	scope.productGroup[itemId].qty -= 1;
	            };

	            scope.isItemQtyZero = function(id) {
	            	return scope.groupItemsInCart[id].qty === 0;
	            };

			}
		};
	}]);
