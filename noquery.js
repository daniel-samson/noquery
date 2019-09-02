function $ready(callback) {
  return window.addEventListener('load', callback);
}

function $1(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return document.querySelectorAll(selector);
}

function $show(selector) {
  $all(selector).forEach(function (element) {
    element.classList.remove('hidden');
  });
}

function $hide(selector) {
  $all(selector).forEach(function (element) {
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
