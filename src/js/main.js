var style_1 = document.getElementById('style_1');
var style_2 = document.getElementById('style_2');
var style_btn = document.getElementById('style_btn');

var eventHandler = {
  addEvent: function(element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler);
    } else {
      element['on' + type] = handler;
    }
  }
}

var setAttr = function(element, type, source) {
  if (element.setAttribute) {
    element.setAttribute(type, source);
  } else {
    element.src = source;
  }
}

eventHandler.addEvent(style_1, 'click',  function() {
  console.log(1);
  setAttr(style_btn, 'src','./src/js/style_1.js');
});

eventHandler.addEvent(style_2, 'click', function() {
  console.log(2);
  setAttr(style_btn, 'src', './src/js/style_2.js');
});
