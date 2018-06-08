var sourceText = document.getElementById('source-text').textContent;
var replacedText = sourceText.replace(/'/g, '"');
var newParagraph = document.createElement('p');
newParagraph.textContent = replacedText;
document.body.appendChild(newParagraph);
