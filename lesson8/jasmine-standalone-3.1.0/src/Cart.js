function Cart(items) {
  this.items = items;
}

Cart.prototype.total = function () {
  var sum = 0;
  if (Array.isArray(this.items)) {
    this.items.forEach(function (item) {
      if (item.quantity) {
        item.quantity = parseInt(item.quantity)
      }
      if (item.price) {
        item.price = parseInt(item.price)
      }
      if (
        item.quantity &&
        item.quantity > 0 &&
        item.price &&
        item.price > 0
      )
      sum += item.quantity * item.price;
    });
  }


  return sum;
};