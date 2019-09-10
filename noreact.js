
/**
 * var titleView = $view `<h1>${'title'}</h1>`;
 * titleView({title: "hello"});
 */
function $view(strings, ...keys) {
  // TODO: try to remove the ... operator - help remove issues older browsers
  return (function(...values) {
    var dict = values[values.length - 1] || {};
    var result = [strings[0]];
    keys.forEach(function(key, i) {
      var value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    }); 
    return result.join('');
  });
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