function Cart(items) {
  this.items = items;
}

Cart.prototype.total = function () {
  var sum = 0;
  this.items.forEach(function (item) {
    sum += item.quantity * item.price;
  });

  return sum;
};