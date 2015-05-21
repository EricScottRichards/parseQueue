var app = angular.module('parseQ');
app.service('parseService', function($http, $q, httpRequestInterceptor){

	this.postData = function(question){
		console.log(question)
		return $http({
			method: "POST",
			url: "https://api.parse.com/1/classes/stuff",
			data: {
				text: question,
			}
		})
	}
	
	this.getData = function(){
		
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/stuff'
		})

	}

})