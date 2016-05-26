'use strict';

angular
	.module("shoppingCart", ["ngDragDrop"])

	.controller('ShoppingCartCtrl', ['$scope', function($scope) {

		$scope.products = [
			{id: 0, price: 10.50, name: "Sneakers", photoUrl:"http://ethicalwares.com/media/catalog/product/s/o/socks-julia-2.jpg", availableQty: 4},
			{id: 1, price: 15.00, name: "Boots", photoUrl:"./img/boot.jpg/", availableQty: 3},
			{id: 2, price: 12.25, name: "Jackets", photoUrl:"./img/jacket.jpg", availableQty: 2},
			{id: 3, price: 8.00, name: "Hats", photoUrl:"./img/hat.jpg", availableQty: 9},
			{id: 4, price: 6.00, name: "Socks", photoUrl:"./img/sock.jpg", availableQty: 3}
		];

		$scope.groupItems = function(cartItems, isZeroQty=false) {
			var retVal = {};
			
			if (cartItems.length === 0)
				return retVal;
			
			cartItems.forEach(function(item, index) {
				retVal[item.id] = (retVal[item.id] || {qty: 0, price:item.price, photoUrl:item.photoUrl, name: item.name, _id: item.id});
				if (!isZeroQty)
					retVal[item.id].qty += item.availableQty || 1;
			});
			return retVal;
		};
		
		$scope.productGroup = $scope.groupItems($scope.products);

		$scope.cartItems = $scope.groupItems($scope.products, true);

		$scope.removeOne = function (event, ui, bag) {
			$scope.productGroup[bag.id].qty -= 1;
		};

		$scope.hideIfOutofStock = function (id) {
			if ($scope.productGroup[id].qty === 0)
				return true;
			return false;
		};

		$scope.addToCart = function (event, ui, bag) {
			$scope.cartItems[bag.cart._id].qty += 1;			
		};

	}]);