

myapp.controller('TimeController', ["$scope","$interval", function($scope,$interval){
    $scope.saveduser = localStorage.getItem('user');
    $scope.user=(localStorage.getItem('user')!==null) ? $scope.saveduser : localStorage.setItem('user',"XXXX");
    var tick = function(){
    $scope.clock = Date.now();
    var date = new Date();
    currentHour = date.getHours();
    if(currentHour >= 0 && currentHour < 6)
    {
      $scope.greet = "Early Morning";
    }
    else if(currentHour >= 6 && currentHour < 12  )
    {
        $scope.greet = "Good Morning";
    }
    else if (currentHour >=12 && currentHour < 18) {
        $scope.greet = "Good Afternoon";
    }
    else if (currentHour >=18 && currentHour < 24) {
        $scope.greet = "Good Evening";
    }
  }
  tick();
  $interval(tick,1000);
}]);
