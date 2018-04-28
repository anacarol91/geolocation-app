controllers.controller('UserLocationController', function($scope, LocationService) {

	/* scope variables */
	$scope.userDetails = '';
  	$scope.showUserLocation = false;

	/* scope functions */
	$scope.getUserLocation = () => {
		LocationService.getLocation('').then(
			(response) => {
				LocationService.initMap(response.data.latitude, response.data.longitude, 'user');
		        $scope.userDetails =  response.data;
		        $scope.showUserLocation = true;
			}, (error) => {
		    	// tratar erro
		        console.log(error);
	  			$scope.showUserLocation = false;
		    });
	}

	$scope.resetUserLocation = () => {
  		$scope.userDetails = '';
  		$scope.showUserLocation = false;
  	}

});