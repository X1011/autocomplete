(function() {

window.addEventListener('load', function() {
	
	var inputs = document.getElementsByClassName('autocomplete');

	for (var i = 0, input = inputs[0];
		     i < inputs.length;
		     i++,   input = inputs[i]) {

		input.setAttribute('autocomplete', 'off'); //prevent browser's native autocomplete from interfering
		
		input.addEventListener('focus', function(e) {
			console.log(e);
		});
	}
});

})();
