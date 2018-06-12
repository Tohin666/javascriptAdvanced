var button = document.getElementById('button');
button.onclick = function () {
  var textarea = document.getElementById('textarea');
  var text = textarea.value;
  alert(isPalindrome(text))
};
function isPalindrome(s) {
  var t = (/[a-z]+/gim.exec(s))[0];
  var i = t.length/2;
  var a = '';
  for (var j = 0; j < i - 0.5; j++) {
    a += t[j];
  }
  var b = '';
  for (var k = t.length-1; k > i - 0.5; k--) {
    b += t[k];
  }
  return b === a
}