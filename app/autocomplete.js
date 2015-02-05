(function() {

var inputs = document.getElementsByClassName('autocomplete');

for (var i = 0, input = inputs[0]; i < inputs.length; i++) {
	
	input.setAttribute('autocomplete', 'off'); //prevent browser's native autocomplete from interfering
	
}
	
})();