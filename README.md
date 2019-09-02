# no query
An extremely lightweight javascript library with some readable syntatic sugar tp replace libraries like jquery are no longer needed, however some vanilla javascript is hard to read.

## Example
```javascript
$ready(function () {
  $listen('.productMenuAction', 'click', function (clickEvent) {
    $stop(clickEvent);
    $toggleClassName('.productMenu', 'hidden');
  });
  
  $listen('.productKeywords', 'keyup', function (keypressEvent) {
    $stop(keypressEvent);
    if (keypressEvent.code === 'Escape')
      return $hide('.productSearchMenu');
    else if (keypressEvent.code === 'Enter')
      return $hide('.productMenu');

    if ($1('.productKeywords').value.length > 0)
      $show('.productSearchMenu');
    else
      $hide('.productSearchMenu');
  });
}
```
