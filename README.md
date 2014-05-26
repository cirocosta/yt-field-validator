# \<yt-field>

> Validates a Youtube URL for you :neckbeard:

The `<yt-field></yt-field>` element is just an extension to the `<input>` elelement. This custom element, however, performs validation for youtube urls and then emits some events to inform the dev about what's going on.

## Quickuse

1.	Add polymer to your project (`bower install --save Polymer/polymer`)

2.	Add yt-field (`bower install --save yt-field`)

3.	Add the `platform.js` from the [polymer project](http://www.polymer-project.org/) and then import the element.

### Example

```html
<head>
	<script src="../bower_components/platform/platform.js"></script>
	<link rel="import" href="bower_components/yt-field-validator/yt-field.html">
</head>
<body>

<yt-field type="url" placeholder="Enter your Youtube video URL"></yt-field>

<script>
	window.addEventListener('polymer-ready', function (e) {
		var ytField = document.querySelector('yt-field');

		ytField.addEventListener('yt-valid-video', function (e) {
			alert('Thanks for giving a valid URL video!');
		});
	});
</script>

</body>
```

#### MIT LICENSE
