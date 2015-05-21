var app = angular.module('parseQ');
app.controller('mainCtrl', function($scope, parseService){
	// $scope.test = ''
	$scope.question = ''

	// $scope.objects = [];

	$scope.postData = function(){
		// console.log($scope.question)
		parseService.postData($scope.question)
			// .then(function(data){
			// 	// console.log(data)
			// })
			.then(function(){
				parseService.getData()
					.then(function(data){
						console.log(data)
						$scope.questions = data.data.results;
						console.log($scope.questions)
					})
			})
	}

	

	// $scope.headers = function(){
	// 	parseService.interceptor()
	// }

	// $scope.headers();
	
})