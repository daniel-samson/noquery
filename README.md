# no query
An extremely lightweight javascript library with some readable syntatic sugar to replace libraries like jquery.

## Example
```javascript
$ready(function () {
  $listen('.product-menu-action', 'click', function (clickEvent) {
    $stop(clickEvent);
    $toggleClassName('.product-menu', 'hidden');
  });
  
  $listen('.product-keywords', 'keyup', function (keypressEvent) {
    $stop(keypressEvent);
    if (keypressEvent.code === 'Escape')
      return $hide('.product-search-menu');
    else if (keypressEvent.code === 'Enter')
      return $hide('.product-menu');

    if ($1('.product-keywords').value.length > 0)
      $show('.product-search-menu');
    else
      $hide('.product-search-menu');
  });
}
```
