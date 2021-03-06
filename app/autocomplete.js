(function() {

	window.addEventListener('load', function() {

		var inputs = document.getElementsByClassName('autocomplete');

		for (var i = 0, input = inputs[0];
				 i < inputs.length;
				 i++,   input = inputs[i]) {

			input.setAttribute('autocomplete', 'off'); //prevent browser's native autocomplete from interfering

			input.addEventListener('focus', createDropdown);
			input.addEventListener('blur', removeDropdown);
			input.addEventListener('input', updateFilter);
		}
	});

	var candidates = ['apple', 'orange', 'banana'];
	var dropdowns = [];

	function createDropdown(e) {
		var input = e.target;
		var dropdown = document.createElement('div');
		dropdowns[input] = dropdown;

		filter(candidates, input.value).forEach(function(candidate) {
			var element = document.createElement('div');
			element.textContent = candidate;
			element.addEventListener('click', function(e) {choose(input, candidate)});
			dropdown.appendChild(element);
		});

		input.parentNode.insertBefore(dropdown, input.nextSibling);
	}
	
	function choose(input, candidate) {
		console.log('choosing');
		input.value = candidate;
	}

	function removeDropdown(e) {
		var input = e.target;
		input.parentNode.removeChild(dropdowns[input]);
	}
	
	function updateFilter(e) {
		//todo: hack
		removeDropdown(e);
		createDropdown(e);
	}

})();

//exposing this so the test can access it
function filter(candidates, input) {
	return candidates.filter(function(candidate) {
		return candidate.indexOf(input) != -1;
	});
}
