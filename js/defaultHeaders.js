var app = angular.module('parseQ');
app.factory('httpRequestInterceptor', function(){
	return{
		request: function (config) {
			config.headers = {'X-Parse-Application-Id': 'EAnOuc7USiFJPsb7E9PHRumj5ohQ1pjEQpxPRn2z', 'X-Parse-REST-API-Key': 'Hm6ibRIKbFKxfwVtVsGVAaP6haLCMuw7wla5AMik'};
			return config;
		}
	};
})