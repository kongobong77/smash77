/*
But by using
Template.registerHelper , we’ve created a global helper that can be used within any template
*/

Template.registerHelper('pluralize', function(n, thing) {
	// fairly stupid pluralizer
	if (n === 1) {
		return '1 ' + thing;
	} else {
		return n + ' ' + thing + 's';
	}
});