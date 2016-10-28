'use strict';

/**
 * @ngdoc filter
 * @name contentfulCustomCmsApp.filter:location
 * @function
 * @description
 * # location
 * Filter in the contentfulCustomCmsApp.
 */
angular.module('contentfulCustomCmsApp')
    .filter('location', ['$rootScope', function($rootScope) {
        var T = $rootScope.T;

        return function(obj) {
            if (!obj) {
                return;
            }

            return '<dl><dt>' + T.LATITUDE + '</dt><dd>' + obj.lat + '</dd><dt>' + T.LONGITUDE + '</dt><dd>' + obj.lon + '</dd></dl>';
        };
    }]);
