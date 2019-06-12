# Templates

> Tiny library to generate template with data binding.

## Usage

Template:

```html
<div id="content">
    <h1>{{ title }}</h1>
    <img src="{{ link }}" />
    <p>{{ nodef }}</p>
</div>
```

Render:

```js
var $content = document.getElementById('content');

$content.innerHTML = Template.compile($content.innerHTML, {
    title: 'This is an example',
    link: 'http://fakeimg.pl/250x100/ff0000/'
});
```

## Unit tests

```
$ npm test
```
