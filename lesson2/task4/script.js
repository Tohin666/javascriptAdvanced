function getResponse () {
  var xhr = new XMLHttpRequest;
  xhr.open('GET', 'response.json');
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);

        var buttonElement = document.getElementById('button');
        if (response.result === 'success') {
          buttonElement.style.backgroundColor = 'green';
          buttonElement.style.cursor = 'pointer';
        } else if (response.result === 'error') {
          buttonElement.style.backgroundColor = 'red';
        } else {
          buttonElement.style.backgroundColor = 'gray';
        }
      }
    }
  }
}

window.onload = function () {
  getResponse();
};