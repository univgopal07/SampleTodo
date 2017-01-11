myapp.controller('SidebarController', function ($scope, $rootScope) {
    $scope.leftVisible = false;

    $scope.close = function () {
        $scope.leftVisible = false;

    };

    $scope.showLeft = function (e) {
        $scope.leftVisible = true;
        e.stopPropagation();
    };

    $rootScope.$on("documentClicked", _close);
    $rootScope.$on("escapePressed", _close);

    function _close() {
        $scope.$apply(function () {
            $scope.close();
        });
    }
});
