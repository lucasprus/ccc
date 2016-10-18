'use strict';
/**
 * @ngdoc directive
 * @name contentfulCustomCmsApp.directive:alertMessages
 * @description
 * # alertMessages
 */
angular.module('contentfulCustomCmsApp')
    .directive('alertMessages', ['AlertMessages', function(AlertMessages) {
        return {
            restrict: 'A',
            templateUrl: 'views/alertMessages.html',
            link: function postLink(scope) {
                scope.alerts = AlertMessages.alerts;
            }
        };
    }]);
