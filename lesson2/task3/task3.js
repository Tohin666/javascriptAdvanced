function Container() {
  this.tagName = 'div';
  this.className = 'container';
  this.id = 'container';
}

Container.prototype.render = function () {
  var element = document.createElement(this.tagName);
  element.className = this.className;
  element.id = this.id;
  return element;
};

function Gallery(className, id, thumbs, galleryJSONData) {
  Container.call(this);

  this.className = className;
  this.id = id;
  this.linkClassName = thumbs.className;
  this.thumbClassName = thumbs.thumbClassName;
  this.galleryJSONData = galleryJSONData;
  this.thumbs = thumbs;
}

Gallery.prototype = Object.create(Container.prototype);
Gallery.prototype.render = function () {
  var galleryDiv = document.createElement(this.tagName);
  galleryDiv.className = this.className;
  galleryDiv.id = this.id;

  var thumbs = this.thumbs;
  this.galleryJSONData.forEach(function (item) {

    var galleryA = thumbs.render(item);

    galleryDiv.appendChild(galleryA)
  });

  return galleryDiv;
};

function Thumb(linkClassName, thumbClassName) {
  Container.call(this);

  this.tagName = 'a';
  this.className = linkClassName;
  this.id = null;
  // this.linkHref = galleryJSONitem.big;
  this.thumbTagName = 'img';
  this.thumbClassName = thumbClassName;
  // this.thumbHref = galleryJSONitem.thumb;
  // this.thumbTitle = galleryJSONitem.title;

}

Thumb.prototype = Object.create(Container.prototype);
Thumb.prototype.render = function (galleryJSONDataItem) {

  var galleryElementA = document.createElement(this.tagName);
  galleryElementA.className = this.className;
  galleryElementA.href = galleryJSONDataItem.big;

  var galleryElementImg = document.createElement(this.thumbTagName);
  galleryElementImg.className = this.thumbClassName;
  galleryElementImg.src = galleryJSONDataItem.thumb;
  galleryElementImg.title = galleryJSONDataItem.title;

  galleryElementA.appendChild(galleryElementImg);

  return galleryElementA;
};

function loadJSON () {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'task3.json');
  xhr.send();
  
  xhr.onreadystatechange = function () {

    if (xhr.readyState === XMLHttpRequest.DONE) {

      if (xhr.status === 200) {
        var galleryData = JSON.parse(xhr.responseText);

        var thumbs = new Thumb('gallery__thumb-link', 'gallery__thumb');

        var gallery = new Gallery('gallery', 'gallery', thumbs, galleryData);

        document.body.appendChild(gallery.render());

        // return galleryData;
      }
    }
  }
}

window.onload = function () {

  loadJSON();

  // var galleryJSONData = loadJSON();

  // var thumbs = new Thumb('gallery__thumb-link', 'gallery__thumb', galleryJSONData);

  // var gallery = new Gallery('gallery', 'gallery', 'gallery__thumb-link', 'gallery__thumb', galleryJSONData);
  //
  // document.body.appendChild(gallery.render());
};