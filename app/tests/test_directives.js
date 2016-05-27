describe('<total-items> directive', function() {
	
	var $compile,
      $rootScope,
      $scope;

	beforeEach(module('shoppingCart'));
	
  beforeEach(module('templates'));

	beforeEach(inject(function(_$compile_, _$rootScope_){
	    $compile = _$compile_;
	    $rootScope = _$rootScope_;
	}));

	it('Replaces the element with the appropriate content', function() {
    $rootScope.cartItems = {
      0: {qty: 1},
      1: {qty: 2}
    };

    var element = $compile('<total-items info="cartItems"></total-items>')($rootScope);
    
    $rootScope.$digest();
    
    // Check that the compiled element contains the templated content
    expect(element.html()).toContain("Total number of items in your cart: ");
    expect(element.html()).toContain("3");
	});

	it('isOutOfStock', function() {
	});

	it('putBackInStore', function() {
	});

  it('isOutOfStock', function() {
	});

});

describe('<total-price> directive', function() {
	beforeEach(module('shoppingCart'));

	it('calculates to price', function() {

	});

});

describe('<cart-table> directive', function() {
	beforeEach(module('shoppingCart'));

	it('displays cart table', function() {

	});
});
