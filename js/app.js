var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
});

App.IndexController = Ember.Controller.extend({
	productsCount: 8,
	logo: 'images/musicnote.png',
	time: function() {
		return (new Date()).toDateString()
	}.property()
});