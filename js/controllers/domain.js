controllers.controller('DomainLocationController', function($scope, LocationService) {

  /* scope variables */
  $scope.domainDetails = '';
  $scope.hostName = '';
  $scope.showDomainLocation = false;

  /* scope functions */
  $scope.getDomainLocation = (hostName) => {
    console.log(hostName);
    LocationService.getLocation(hostName).then(
      (response) => {
        console.log(response.data);
        LocationService.initMap(response.data.latitude, response.data.longitude, 'domain');
        $scope.domainDetails =  response.data;
        $scope.showDomainLocation = true;
      }, (error) => {
          // tratar erro
            console.log(error);
          $scope.showDomainLocation = false;
        });
    }
});