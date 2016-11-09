(function () {
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
            } else if (items.length > 3) {
                $scope.message = "Too much!";
                $scope.color = "green";
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.color = "green";
            }
        }
    }
})();