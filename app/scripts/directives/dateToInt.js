'use strict';

/**
 * @ngdoc directive
 * @name contentfulCustomCmsApp.directive:dateToInt
 * @description
 * # dateToInt
 */
angular.module('contentfulCustomCmsApp')
    .directive('dateToInt', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function postLink(scope, element, attrs, ngModel) {
                ngModel.$formatters.push(function(value) {
                    if (value) {
                        return new Date(value);
                    }

                    return null;
                });

                ngModel.$parsers.push(function(value) {
                    if (value) {
                        return value.valueOf();
                    }

                    return null;
                });
            }
        };
    });
