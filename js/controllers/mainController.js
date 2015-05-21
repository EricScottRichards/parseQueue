var app = angular.module('parseQ');
app.controller('mainCtrl', function($scope, parseService){
	// $scope.test = ''
	$scope.question = ''

	$scope.postData = function(){
		console.log($scope.question)
		parseService.postData($scope.question)
			.then(function(data){
				console.log(data)
			})
	}

	// $scope.headers = function(){
	// 	parseService.interceptor()
	// }

	// $scope.headers();
	
})