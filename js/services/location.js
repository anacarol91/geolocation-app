services.factory('LocationService', function($q, $http) {

	var API_HOST = 'http://freegeoip.net'
	var freegeoipAPI = {};

	freegeoipAPI.getLocation = (hostName) => {
	  var deferred = $q.defer();

	  $http({
	    method: 'GET',
	    url: API_HOST + '/json/' + hostName
	  }).then(deferred.resolve, deferred.reject);

	  return deferred.promise
	}

	freegeoipAPI.initMap = (latitude, longitude, id) => {
	    var uluru = {lat: latitude, lng: longitude};
	    var map = new google.maps.Map(document.getElementById(id + '-map'), {
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

	return freegeoipAPI;
});