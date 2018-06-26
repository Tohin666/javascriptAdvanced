describe('Module: MenuItem', function () {
  it('should return strings width link and title', function () {
    var menu = new MenuItem(
      'https://geekbrains.ru',
      'Home'
      );
    expect(menu.href).toBe('https://geekbrains.ru');
    expect(menu.title).toBe('Home');
  });

  it('should return false if link is not a string', function () {
    var menu = new MenuItem(
      1,
      'Home'
    );
    expect(menu.href).toBeFalsy();
  });

  it('should return correct link', function () {
    var menu = new MenuItem(
      'geekbrains.ru',
      'Home'
    );
    expect(menu.href).toMatch(/\w+\.\w+/);
  });
});