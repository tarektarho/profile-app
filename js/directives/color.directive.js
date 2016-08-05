(function() {
    'use strict';

    angular
        .module('profile.directives')
        .directive('color', function() {
            return {
                restrict: 'EA',
                controller: controller,
                link: function(scope, element, attrs) {
                    scope.elementId = '#' + attrs.id;
                }
            }
        }
    );

    controller.$inject = ['$scope'];

    function controller($scope) {
        $scope.$watch('profile.firstName', function(newValue) {
            if(newValue) {
                angular.element(document.querySelector($scope.elementId)).css('background-color', 'green');
            } else {
                angular.element(document.querySelector($scope.elementId)).css('background-color', 'red');
            }
        })
    }
})();