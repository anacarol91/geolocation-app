controllers.controller('UserLocationController', function($scope, LocationService) {

	/* scope variables */
	$scope.userDetails = '';
  	$scope.showUserLocation = false;

	/* scope functions */
	$scope.getUserLocation = () => {
	LocationService.getLocation('').then(
		(response) => {
			initMap(response.data.latitude, response.data.longitude);
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

  	/* controller functions */
  	var initMap = (latitude, longitude) => {
        var uluru = {lat: latitude, lng: longitude};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: uluru,
          fullscreenControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
});