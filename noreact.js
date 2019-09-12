
/**
 * var titleView = $view `<h1>${'title'}</h1>`;
 * titleView({title: "hello"});
 */
function $view(strings) {
  for (
    var _len = arguments.length,
      keys = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    keys[_key - 1] = arguments[_key];
  }
  return function() {
    for (
      var _len2 = arguments.length, values = new Array(_len2), _key2 = 0;
      _key2 < _len2;
      _key2++
    ) {
      values[_key2] = arguments[_key2];
    }

    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

/**
 * Lets you use a string instead of a template literal
 * var titleView = $viewStringLiteral(`<h1>${'title'}</h1>`);
 * titleView({title: "hello"});
 **/
function $viewStringLiteral(string) {
  var regex = /\${['"][\w\d]+['"]}/g;
  var templateSplit = string.split(regex);
  var args = [templateSplit];
  var matches = string.matchAll(regex);
  for (var arr of matches) {
    var z = string.substring(arr.index + 3, (arr.index + arr[0].length) - 2);
    args.push(z);
  }
  
  return $view.apply(null, args);
}
/**
 * Bind model to view and update target when model changes
 * var titleMV = $modelView($1('.title'), {title: "reactive components"}, $view `<h1>${'title'}</h1>`);
 * titleMV.title = "new title";
 */
function $modelView(target, model, view)
{
  var modelProxy = new Proxy(model, {
    set: function(object, property, value) {
      object[property] = value;
      target.innerHtml = view(object);
    }
  });
  target.innerHtml = view(modelProxy);
  return modelProxy;
}
