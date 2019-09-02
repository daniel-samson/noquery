function $ready(callback, parentNode) {
  var node =  parentNode ? parentNode : window;
  return node.addEventListener('load', callback);
}

function $1(selector, parentNode) {
  var node =  parentNode ? parentNode : document;
  return node.querySelector(selector);
}

function $all(selector, parentNode) {
  var node =  parentNode ? parentNode : document;
  return node.querySelectorAll(selector);
}

function $show(selector, parentNode) {
  $all(selector, parentNode).forEach(function (element) {
    element.classList.remove('hidden');
  });
}

function $hide(selector, parentNode) {
  $all(selector, parentNode).forEach(function (element) {
    element.classList.add('hidden');
  });
}

function $toggleClassName(selector, classNameNeedle, classNameReplacement) {
  $all(selector).forEach(function (element) {
    if (element.classList.contains(classNameNeedle)) {
      element.classList.remove(classNameNeedle);
    } else {
      element.classList.add((classNameReplacement) ? classNameReplacement : classNameNeedle);
    }
  });
}

function $stop(event) {
  event.preventDefault();
  event.stopPropagation();
}

function $listen(selector, event, listener) {
  return $all(selector).forEach(function (element) {
    element.addEventListener(event, listener);
  });
}

function $ignore(selector, event, listener, useCapture) {
  return $all(selector).forEach(function (element) {
    element.removeEventListener(event, listener, useCapture);
  });
}

function $redirect(url) {
  window.location.href = url;
}
