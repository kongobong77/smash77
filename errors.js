/*

We are going to implement a simple system which displays new errors in the upper-right corner of
the window, similar to popular Mac OS app Growl.
Introducing Local Collections
To start off, we need to create a collection to store our errors in. Given that the errors are only
relevant to the current session and don’t need to be persistent in any way, we are going to do
something new, and create a local collection. What this means is that the Errors collection will
only exist in the browser, and will make no attempt to synchronize back to the server.

*/

// Local (client-only) collection
Errors = new Mongo.Collection(null);

throwError = function(message) {
	Errors.insert({message: message});
};

Template.errors.helpers({
	errors: function() {return Errors.find();}
});

/*
We’ll use Meteor.setTimeout to specify a callback function to be executed after the timeout (in
this case, 3000 milliseconds) expires */

Template.error.onRendered(function() {
	var error = this.data;
	Meteor.setTimeout(function () {Errors.remove(error._id);}, 3000);
});
/*
The onRendered callback triggers once our template has been rendered in the browser. Inside the
callback, this refers to the current template instance, and this.data lets us access the data of
the object that is currently being rendered (in our case, an error). */