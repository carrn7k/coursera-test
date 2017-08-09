(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

	$scope.lunchItems = "";
	$scope.lunchMsg = "";
	$scope.emptyItem = ""; // Please note that (', ,') is not considered an item

	$scope.splitItems = function() {

		var items = $scope.lunchItems;

		if (!items) {
			$scope.lunchMsg = "Please Enter Data First";
		} else {
			var splitItems = items.split(',').filter(function(item) {
				return /\S/.test(item);
			})
			
			if (splitItems.length <= 3)
				$scope.lunchMsg = "Enjoy!";
			else
				$scope.lunchMsg = "Too Much!";
		}

	}

}
})();