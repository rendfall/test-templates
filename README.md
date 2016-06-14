# Templates

Tiny library to generate template with data binding.

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

```Javascript
    var tmp = new Template();
    var $content = document.getElementById('content');
    var html = content.innerHTML;

    $content.innerHTML = tmp.render(html, {
        title: 'This is an example',
        link: 'http://www.wallpapersxl.com/thumb/twin-peaks-another-place-black-lodge-waiting-room-white-image-198946.jpg'
    });
```
