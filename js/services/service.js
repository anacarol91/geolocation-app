var services = angular.module('services', []);

  services.factory('LocationService', function($q, $http) {

    var API_HOST = 'http://freegeoip.net'
    var freegeoipAPI = {};

    return freegeoipAPI;
  });