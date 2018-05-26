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

Container.prototype.removeContainer = function (idOfContainer) {
  var containerToRemove;
  containerToRemove = document.getElementById(idOfContainer);
  containerToRemove.remove();
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
    if (item instanceof MenuItem) {
      menu.appendChild(item.render());
    }
  });

  return menu;
};

function MegaMenu(className, id, items) {
  Menu.call(this);

  this.className = className;
  this.id = id;
  this.items = items;
}

MegaMenu.prototype = Object.create(Menu.prototype);
MegaMenu.prototype.render = function () {
  var menu = document.createElement(this.tagName);
  menu.className = this.className;
  menu.id = this.id;

  this.items.forEach(function (item) {
    if (item instanceof MenuItem) {
      menu.appendChild(item.render());
      if ()
        }
  })
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

window.onload = function () {
  var items = [
    new MenuItem('https://geekbrains.ru', 'Home'),
    new MenuItem('https://geekbrains.ru', 'News'),
    new MenuItem('https://geekbrains.ru', 'Blog')
  ];

  var menu = new Menu('menu', 'menu', items);

  document.body.appendChild(menu.render());

};
