var app = angular.module('parseQ');
app.service('parseService', function($http, httpRequestInterceptor){
	
	// this.interceptor = function(){
	// 	httpRequestInterceptor.request()
	// 	.then(function(data){
	// 		console.log(data)
	// 	})
	// }


	this.postData = function(question){
		console.log(question)
		return $http(httpRequestInterceptor.request({
			method: "POST",
			url: "https://api.parse.com/1/classes/stuff",
			data: {
				text: question,
				// 'X-Parse-Application-Id': 'EAnOuc7USiFJPsb7E9PHRumj5ohQ1pjEQpxPRn2z',
				// 'X-Parse-REST-API-Key': 'Hm6ibRIKbFKxfwVtVsGVAaP6haLCMuw7wla5AMik'
			}
		}))
	}

})