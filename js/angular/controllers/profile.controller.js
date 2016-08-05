(function() {
    'use strict';

    angular
        .module('profile')
        .controller("profileController", profileController);

    profileController.$inject = ['$scope'];

    function profileController($scope) {
        $scope.profile = {
            firstName: "",
            lastName: "",
            nickname: "",
            city: "",
            phone: ""
        };

        $scope.editProfile = true;
    }
    

})();
