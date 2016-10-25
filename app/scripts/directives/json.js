'use strict';

/**
 * @ngdoc directive
 * @name contentfulCustomCmsApp.directive:json
 * @description
 * # dateToInt
 */
angular.module('contentfulCustomCmsApp')
    .directive('json', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, ngModel) {
                ngModel.$formatters.push(function(value) {
                    if (value) {
                        return JSON.stringify(value);
                    }

                    return null;
                });

                ngModel.$parsers.push(function(value) {
                    if (value) {
                        return JSON.parse(value);
                    }

                    return null;
                });
            }
        };
    });
