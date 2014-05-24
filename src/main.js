window.addEventListener('polymer-ready', function (e) {
	var ajax = document.querySelector('core-ajax');

	ajax.addEventListener('core-response', function (e) {
		console.log(this.response);
	});

	ajax.go();
});
