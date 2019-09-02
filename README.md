# no query
An an altra light weight javascript library with some readable syntatic sugar. Libraries like jquery are no longer needed, however some vinila javascript is hard to read.

## Example
```javascript
$ready(function () {
  $listen('.productMenuAction', 'click', function (clickEvent) {
    $stop(clickEvent);
    $toggleClassName('.productMenu', 'hidden');
  });
}
```
