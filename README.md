# no query
An extremely lightweight javascript library to replace jQuery. No query is 2KB in size, which is significanty less than jQuery (30KB). Please see [wiki](https://github.com/daniel-samson/noquery/wiki) for more detail.

## Example
```javascript
$ready(() => {
  $listen('.product-menu-action', 'click', (clickEvent) => {
    $stop(clickEvent)
    $toggleClassName('.product-menu', 'hidden')
  })
  
  $listen('.product-keywords', 'keyup', (keypressEvent) => {
    $stop(keypressEvent)
    if (keypressEvent.code === 'Escape')
      return $hide('.product-search-menu')
    else if (keypressEvent.code === 'Enter')
      return $hide('.product-menu')

    if ($1('.product-keywords').value.length > 0)
      $show('.product-search-menu');
    else
      $hide('.product-search-menu')
  })
}
```
