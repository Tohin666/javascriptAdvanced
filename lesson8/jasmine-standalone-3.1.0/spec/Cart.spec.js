describe('Module: Cart', function () {
  it('should return total sum', function () {
    var cart = new Cart([
      {
        quantity: 2,
        price: 4
      },
      {
        quantity: 1,
        price: 6
      }
    ]);
    expect(cart.total()).toBe(14)
  });

  it('should skip items without price', function () {
    var cart = new Cart([
      {
        quantity: 2
      },
      {
        quantity: 1,
        price: 6
      }
    ]);
    expect(cart.total()).toBe(6)
  });

  it('should skip items with negative price or quantity', function () {
    var cart = new Cart([
      {
        quantity: 2,
        price: -1
      },
      {
        quantity: -1,
        price: 6
      }
    ]);
    expect(cart.total()).toBe(0)
  });

  it('should return zero in case of empty items', function () {
    var cart = new Cart([

    ]);
    expect(cart.total()).toBe(0)
  });

  it('should return zero in case of incorrect format', function () {
    var cart = new Cart();
    expect(cart.total()).toBe(0)
  });

  it('should parse integer from strings', function () {
    var cart = new Cart([
      {
        quantity: '2',
        price: 1
      },
      {
        quantity: 1,
        price: '6 rub.'
      }
    ]);
    expect(cart.total()).toBe(8)
  });
});