myapp.controller('AboutController', ["$scope", function($scope){
  $scope.saveduser = localStorage.getItem('user');
  $scope.user=(localStorage.getItem('user')!==null) ? $scope.saveduser : localStorage.setItem('user',"XXXX");

  $scope.saveUser=function(){
      localStorage.setItem('user',$scope.userName);
      $scope.user="";
  };

}]);
