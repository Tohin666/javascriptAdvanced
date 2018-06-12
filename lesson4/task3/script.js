
(function ($) {
  var enteredKeys = '';

  $ (document).on('keypress', '#city', (function (event) {
    enteredKeys += event.key;
    console.log(enteredKeys);
    if (enteredKeys.length === 3) {
      $.get(
        'cities.json',
        {},
        function (cities) {
          var citiesArr = [];
          cities.forEach(function (city) {
            var cityName = city.name;
            citiesArr.push(cityName);
            // if ((cityName[0]).toLowerCase() === (enteredKeys[0]).toLowerCase()) {
            //   citiesArr.push(cityName);
            //   // console.log(cityName)
            // }

          })
        },
        'json'
      )
    }
    // if (enteredKeys.length === 2) {
    //   citiesArr.forEach(function (city) {
    //     if ((city[1]).toLowerCase() !== (enteredKeys[1]).toLowerCase()) {
    //       // console.log(citiesArr.indexOf(city));
    //
    //       console.log(citiesArr.splice(citiesArr.indexOf(city)));
    //     }
    //   });
    //   console.log(citiesArr)
    // }
    // if (enteredKeys.length === 3) {
    //   $('<span/>', {
    //     text: cityName
    //   }).appendTo('#cities');
    //
    // }

  })
  )
})(jQuery);


var button = document.getElementById('button');
button.onclick = function () {
  var message = '';


  var name = document.getElementById('name');
  var nameValue = name.value;

  if (/[^a-zа-яё]/i.test(nameValue) || nameValue === '') {
    name.style.borderColor = 'red';
    message = 'Имя может содержать только буквы латинского или русского алфавита!';

  } else {
    name.style.borderColor = 'inherit';
  }


  var phone = document.getElementById('phone');
  var phoneValue = phone.value;
  if (!(/^\+7\(\d{3}\)\d{3}-\d{4}$/.test(phoneValue)) || phoneValue === '') {
    phone.style.borderColor = 'red';
    message += '\nВведите телефон в формате +7(000)000-0000';
  } else {
    phone.style.borderColor = 'inherit';
  }

  var mail = document.getElementById('mail');
  var mailValue = mail.value;
  if (!(/^[.\w]+@\w+\.\w+$/.test(mailValue)) || mailValue === '') {
    mail.style.borderColor = 'red';
    message += '\nВведите правильный e-mail';
  } else {
    mail.style.borderColor = 'inherit';
  }

  var text = document.getElementById('text');
  var textValue = text.value;
  if (!(/[\wа-яё]/i.test(textValue)) || textValue === '') {
    text.style.borderColor = 'red';
    message += '\nВведите текст сообщения!';
  } else {
    text.style.borderColor = 'inherit';
  }

  if (message !== '') {
    alert(message)
  } else {
    alert('Данные успешно отправлены!')
  }
};