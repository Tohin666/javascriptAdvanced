var sourceText = document.getElementById('source-text').textContent;
var replacedText = sourceText.replace(/^'/g, '"');
replacedText = replacedText.replace(/'$/g, '"');
replacedText = replacedText.replace(/\s'/g, ' "');
replacedText = replacedText.replace(/'\s/g, '" ');
var newParagraph = document.createElement('p');
newParagraph.textContent = replacedText;
document.body.appendChild(newParagraph);
