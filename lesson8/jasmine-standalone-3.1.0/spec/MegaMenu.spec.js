describe('Module: MegaMenu', function () {
  it('should return strings width class, ID, link and title', function () {
    var menu = new MegaMenu(
      'childMenu',
      'childMenuID',
      [
        'https://geekbrains.ru',
        'Dresses'
      ],
      'WOMEN',
      'https://geekbrains.ru'
    );
    expect(menu.className).toBe('childMenu');
    expect(menu.id).toBe('childMenuID');
    expect(menu.title).toBe('WOMEN');
    expect(menu.href).toBe('https://geekbrains.ru');
  });

  it('should return strings width link and title in "item" attributes', function () {
    var menu = new MegaMenu(
      'childMenu',
      'childMenuID',
      [
        'https://geekbrains.ru',
        'Dresses'
      ],
      'WOMEN',
      'https://geekbrains.ru'
    );
    expect(menu.items[0]).toBe('https://geekbrains.ru');
    expect(menu.items[1]).toBe('Dresses');
  });

  it('should return false if link is not a string', function () {
    var menu = new MegaMenu(
      'childMenu',
      'childMenuID',
      [
        'https://geekbrains.ru',
        'Dresses'
      ],
      'WOMEN',
      1
    );
    expect(menu.href).toBeFalsy();
  });
});