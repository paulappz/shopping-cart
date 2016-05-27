describe('ShoppingCartCtrl', function() {
  var $controller;
  var $scope;

  beforeEach(module('shoppingCart'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    $scope = {
        products : [
          {id: 0, price: 10.50, name: "Sneakers", photoUrl:"", availableQty: 4},
          {id: 1, price: 15.00, name: "Boots", photoUrl:"", availableQty: 3},
          {id: 2, price: 12.25, name: "Jackets", photoUrl:"", availableQty: 2},
          {id: 3, price: 8.00, name: "Hats", photoUrl:"", availableQty: 9},
          {id: 4, price: 6.00, name: "Socks", photoUrl:"", availableQty: 3}
        ],
        bag: {
          cart: {
            _id: 0
          },
          id: 0
        }
    };
  }));


  describe('$scope.groupItems', function() {
     
    it('group items in a cart by id', function() {
     
      var controller = $controller('ShoppingCartCtrl', { $scope: $scope });
      $scope.productGroup = $scope.groupItems($scope.products);

      expect(Object.keys($scope.productGroup).length).toEqual(5);

    });
  });

  describe('$scope.removeOne', function() {
     
    it('removes an item', function() {
     
      var controller = $controller('ShoppingCartCtrl', { $scope: $scope });
      $scope.productGroup = $scope.groupItems($scope.products);

      $scope.removeOne(null, null, $scope.bag);
      expect($scope.productGroup[$scope.bag.id].qty).toEqual(3);

    });
  });

  describe('$scope.hideIfOutofStock', function() {
    it('hides an item if it\'s out of stock', function() {
      
      var controller = $controller('ShoppingCartCtrl', { $scope: $scope });
      $scope.productGroup = $scope.groupItems($scope.products);

      expect($scope.hideIfOutofStock($scope.bag.id)).toBeFalsy();

      $scope.productGroup[$scope.bag.id].qty = 0;
      expect($scope.hideIfOutofStock($scope.bag.id)).toBeTruthy();
    });
  });  

  describe('$scope.addToCart', function() {
    it('add an item to cart', function() {
      
      var controller = $controller('ShoppingCartCtrl', { $scope: $scope });
      $scope.productGroup = $scope.groupItems($scope.products);
      $scope.cartItems = $scope.groupItems($scope.products, true);
      
      $scope.addToCart(null, null, $scope.bag);

      expect($scope.cartItems[$scope.bag.id].qty).toEqual(1);
    });
  });
});