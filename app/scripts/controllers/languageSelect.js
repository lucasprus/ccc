'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:LanguageSelectCtrl
 * @description
 * # LanguageSelectCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('LanguageSelectCtrl', ['$scope', '$window', '$cookies', function($scope, $window, $cookies) {
        $scope.setLocaleAndReload = function() {
            $cookies.put('locale', $scope.$root.locale);
            $window.location.reload();
        };
    }]);
