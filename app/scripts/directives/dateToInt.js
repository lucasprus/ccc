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
                        var d = new Date(value);

                        if (d.toString() === 'Invalid Date') {
                            d = new Date(parseInt(value, 10));
                        }

                        return d;
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
