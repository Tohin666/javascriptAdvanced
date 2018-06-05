function Container() {
  this.tagName = 'div';
  this.className = 'container';
  this.id = 'container';
}

Container.prototype.render = function () {
  var element = document.createElement(this.tagName);
  element.id = this.id;
  element.className = this.className;
  return element;
};

function Menu(className, id, items) {
  Container.call(this);

  this.tagName = 'ul';
  this.className = className;
  this.id = id;
  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
  var menu = document.createElement(this.tagName);
  menu.className = this.className;
  menu.id = this.id;

  this.items.forEach(function (item) {
    if (item instanceof Container) {
      menu.appendChild(item.render());
    }
  });

  return menu;
};

function MenuItem(href, title) {
  Container.call(this);

  this.tagName = 'li';
  this.className = 'menu-item';
  this.href = href;
  this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function () {
  var li = document.createElement(this.tagName);
  li.className = this.className;

  var link = document.createElement('a');
  link.href = this.href;
  link.textContent = this.title;

  li.appendChild(link);

  return li;
};

function MegaMenu(className, id, items, title, href) {
  Menu.call(this, className, id, items);
  this.title = title;
  this.href = href;
}

MegaMenu.prototype = Object.create(Menu.prototype);
MegaMenu.prototype.render = function () {
  if(this.title) {
    var menuItem = new MenuItem(this.href, this.title).render();
    menuItem.appendChild(Menu.prototype.render.call(this));

    return menuItem;
  } else {
    return Menu.prototype.render.call(this);
  }
};

window.onload = function () {
  var items = [
    new MenuItem('https://geekbrains.ru', 'Home'),
    new MegaMenu('childMenu', 'childMenu', [
      new MegaMenu('childMenu', 'childMenu', [
        new MenuItem('https://geekbrains.ru', 'Dresses'),
        new MenuItem('https://geekbrains.ru', 'Denim'),
        new MenuItem('https://geekbrains.ru', 'Shoes')
      ], 'WOMEN', 'https://geekbrains.ru'),
      new MegaMenu('childMenu', 'childMenu', [
        new MenuItem('https://geekbrains.ru', 'Shirts'),
        new MenuItem('https://geekbrains.ru', 'Sweaters'),
        new MenuItem('https://geekbrains.ru', 'Shoes')
      ], 'MEN', 'https://geekbrains.ru')
    ], 'Catalog', 'https://geekbrains.ru'),
    new MenuItem('https://geekbrains.ru', 'Promo'),
    new MenuItem('https://geekbrains.ru', 'Blog'),
    new MegaMenu('childMenu', 'childMenu', [
      new MenuItem('https://geekbrains.ru', 'politics'),
      new MenuItem('https://geekbrains.ru', 'weather'),
      new MenuItem('https://geekbrains.ru', 'sport')
    ], 'News', 'https://geekbrains.ru'),
    new MenuItem('https://geekbrains.ru', 'My Account')
  ];

  var menu = new MegaMenu('menu', 'menu', items);

  document.body.appendChild(menu.render());
};
