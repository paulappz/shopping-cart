'use strict';

angular
	.module("shoppingCart", ["ngDragDrop"])

	.controller('ShoppingCartCtrl', ['$scope', function($scope) {

		$scope.products = [
			{price: 10.50, name: "Sneakers", photoUrl:"http://placehold.it/100x100", availableQty: 4},
			{price: 15.00, name: "Boots", photoUrl:"http://placehold.it/100x100", availableQty: 3},
			{price: 12.25, name: "Jackets", photoUrl:"http://placehold.it/100x100", availableQty: 2},
			{price: 8.00, name: "Hats", photoUrl:"http://placehold.it/100x100", availableQty: 9},
			{price: 6.00, name: "Socks", photoUrl:"http://placehold.it/100x100", availableQty: 3}
		];

		$scope.cartItems = [];

		$scope.removeOne = function () {
			this.product.availableQty -= 1;
		};

		$scope.hideIfDepleted = function () {
			if (this.product.availableQty === 0)
				return true;
			return false;
		};

		$scope.addToCart = function () {
			var item = {
				name:  this.cart.name,
				price: this.cart.price
			};

			$scope.cartItems.push(item);
		};
	}]);