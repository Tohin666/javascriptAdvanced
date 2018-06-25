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
  })
});