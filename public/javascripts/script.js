'use strict';

$(document).ready(function() {
	console.log("initial jquery");
});

var app = new Vue({
	el: '#app',
	data() {
		return {
			title: 'Hello seeding'
		}
	},
	created() {
		console.log('created new Vue', this.title);
	}
});