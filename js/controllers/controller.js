controllers.controller('UserLocationController', function($scope, LocationService) {

	/* scope variables */
	$scope.userDetails = '';

	/* scope functions */
	$scope.getUserLocation = () => {
	LocationService.getLocation('').then(
		(response) => {
	        $scope.userDetails =  response.data;
	        console.log($scope.userDetails);
		}, (error) => {
	    	// tratar erro
	        console.log(error);
	    });
	}

	$scope.resetUserLocation = () => {
  		$scope.userDetails = '';
  	}
});