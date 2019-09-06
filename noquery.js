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
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    }
  });
}

function $hide(selector, parentNode) {
  $all(selector, parentNode).forEach(function (element) {
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    }
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

function $request(method, url, send) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  return new Promise(function (resolve, reject) {
    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300)
        reject({request: xhr});
      else
        resolve(xhr);
    };
    xhr.onerror = function () {
      reject({request: xhr});
    };
    xhr.send(send);
  });
}

function $get(url) {
  return $request('GET', url);
}

function $post(url, send) {
  return $request('POST', url, send);
}

function $put(url, send) {
  return $request('PUT', url, send);
}

function $delete(url) {
  return $request('DELETE', url);
}

function $head(url) {
  return $request('HEAD', url);
}

function $connect(url) {
  return $request('CONNECT', url);
}

function $trace(url) {
  return $request('TRACE', url);
}
