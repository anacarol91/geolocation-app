controllers.controller('DomainLocationController', function($scope, $timeout, LocationService) {

  /* scope variables */
  $scope.domainDetails = '';
  $scope.hostName = '';
  $scope.showDomainLocation = false;
  $scope.notFound = false;
  //$scope.completed = false;

  /* scope functions */
  $scope.getDomainLocation = (hostName) => {
    console.log(hostName);
    LocationService.getLocation(hostName).then(
      (response) => {
        console.log(response.data);
        LocationService.initMap(response.data.latitude, response.data.longitude, 'domain');
        $scope.domainDetails =  response.data;
        $scope.showDomainLocation = true;
        $scope.notFound = false;
      }, (error) => {
            console.log(error);
            $scope.showDomainLocation = false;
            $scope.notFound = true;
        });
    }
});