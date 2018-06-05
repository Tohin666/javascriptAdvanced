function Container() {
  this.tagName = 'div';
  this.className = 'container';
  this.id = 'container';
}

Container.prototype.render = function() {
  var element = document.createElement(this.tagName);
  element.id = this.id;
  element.className = this.className;
  return element;
}

function Menu(className, id, items) {
  Container.call(this);

  this.tagName = 'ul';
  this.className = className;
  this.id = id;
  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {
  var menu = document.createElement(this.tagName);
  menu.className = this.className;
  menu.id = this.id;

  this.items.forEach(function(item) {
    if(item instanceof Container) {
      menu.appendChild(item.render());
    }
  });

  return menu;
}

function MenuItem(href, title) {
  Container.call(this);

  this.tagName = 'li';
  this.className = 'menu-item';
  this.href = href;
  this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function() {
  var li = document.createElement(this.tagName);
  li.className = this.className;

  var link = document.createElement('a');
  link.href = this.href;
  link.textContent = this.title;

  li.appendChild(link);

  return li;
}

function SuperMenu(className, id, items, title, href) {
  Menu.call(this, className, id, items);
  this.title = title;
  this.href = href;
}

SuperMenu.prototype = Object.create(Menu.prototype);
SuperMenu.prototype.render = function() {
  if(this.title) {
    var menuItem = new MenuItem(this.href, this.title).render();
    menuItem.appendChild(Menu.prototype.render.call(this));

    return menuItem;
  } else {
    return Menu.prototype.render.call(this);
  }
}

window.onload = function() {
  var items = [
    new MenuItem('https://geekbrains.ru', 'Home'),
    new MenuItem('https://geekbrains.ru', 'News'),
    new MenuItem('https://geekbrains.ru', 'Blog'),
    new SuperMenu('childMenu', 'childMenu', [
      new MenuItem('https://geekbrains.ru', 'Home'),
      new MenuItem('https://geekbrains.ru', 'News'),
      new MenuItem('https://geekbrains.ru', 'Blog'),
    ], 'Child Menu', 'https://geekbrains.ru')
  ]
  
  var menu = new SuperMenu('menu', 'menu', items);
  
  document.body.appendChild(menu.render());
}
