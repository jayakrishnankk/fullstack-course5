(function () {
    "use strict";
    angular.module('Assignment1', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchmenu = "";
        $scope.message = "";

        $scope.checkMenu = function() {
            var items = $scope.lunchmenu.split(",");
            if (items == "") {
                $scope.message = "Please enter data first";
                $scope.color = "red";
                $scope.bordercolor = "red-border";
            } else if (items.length > 3) {
                $scope.message = "Too much!";
                $scope.color = "green";
                $scope.bordercolor = "green-border";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.color = "green";
                $scope.bordercolor = "green-border";
            }
        }
    }
})();