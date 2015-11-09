
app.controller("SampleAppCtrl", ['$http', '$scope', function ($http, $scope) {

	$http({method: 'GET', url: 'data/data.json'}).success(function(data){
		
		$scope.items = data,
		       templatePath = 'templates/main.html',
		       sortField = undefined,
		       reverse = false;
		
		//ASC DESC sort
		$scope.sort = function (fildName) {
			if($scope.sortField === fildName) {
				$scope.reverse = !$scope.reverse;
			} else {
				$scope.sortField = fildName
				$scope.reverse = false;
			}
		};
		
		
		$scope.isSortUp = function (fildName) {
			return $scope.sortField === fildName && !$scope.reverse;
		};
		
		$scope.isSortDown = function (fildName) {
			return $scope.sortField === fildName && $scope.reverse;
		};				           		
    });
}]);