new Vue({
	el: '#exercise',
	data: {
		name: 'Austin',
		age: '32',
		imageSrc: 'https://imgs.xkcd.com/comics/thermostat.png'
	},
	methods: {
		ageMultiplied: function (){
			return this.age * 3;
		},
		randomNumber: function() {
			return Math.random();
		}
	}
})
