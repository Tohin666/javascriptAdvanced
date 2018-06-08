var button = document.getElementById('button');
button.onclick = function () {

  while (true) {
    var name = document.getElementById('name');
    var nameValue = name.value;
    var phone = document.getElementById('phone');
    var phoneValue = phone.value;
    if (/[^a-zа-яё]/i.test(nameValue)) {
      name.style.borderColor = 'red';
      alert('Имя может содержать только буквы латинского или русского алфавита!')

    } else if (/[0-9]/.test(phoneValue)) {

      name.style.borderColor = 'gray';
      phone.style.borderColor = 'red';
      alert('Введите телефон в формате +7(000)000-0000')
    }
    break
  }
};