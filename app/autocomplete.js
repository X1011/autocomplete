(function() {

window.addEventListener('load', function() {
	
	var inputs = document.getElementsByClassName('autocomplete');

	for (var i = 0, input = inputs[0];
		     i < inputs.length;
		     i++,   input = inputs[i]) {

		input.setAttribute('autocomplete', 'off'); //prevent browser's native autocomplete from interfering
		
		input.addEventListener('focus', createDropdown);
		input.addEventListener('blur', removeDropdown);
	}
});
	
var candidates = ['apple', 'orange', 'banana'];
var dropdowns = [];
	
function createDropdown(e) {
	var input = e.target;
	var dropdown = document.createElement('div');
	dropdowns[input] = dropdown;
	
	candidates.forEach(function(candidate) {
		var element = document.createElement('div');
		element.textContent = candidate;
		dropdown.appendChild(element);
	});
	
	input.parentNode.insertBefore(dropdown, input.nextSibling);
}
	
function removeDropdown(e) {
	var input = e.target;
	input.parentNode.removeChild(dropdowns[input]);
}

})();
