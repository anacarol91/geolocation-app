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

	return freegeoipAPI;
});