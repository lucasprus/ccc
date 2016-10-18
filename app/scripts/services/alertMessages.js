'use strict';

/**
 * @ngdoc service
 * @name contentfulCustomCmsApp.AlertMessages
 * @description
 * # AlertMessages
 * Factory in the contentfulCustomCmsApp.
 * We use it to notify user about successful and failed actions
 */
angular.module('contentfulCustomCmsApp')
    .factory('AlertMessages', ['$timeout', function($timeout) {
        var alerts = [];

        function Alert(data) {
            this.type = data.type;
            this.message = data.message;
        }

        Alert.prototype.dismiss = function() {
            alerts.splice(alerts.indexOf(this), 1);
        };

        return {
            alerts: alerts,
            push: function() {
                var alert;
                var i = 0;
                var l = arguments.length;

                function timeoutFunction(alert) {
                    return function() {
                        alert.dismiss();
                    };
                }

                for (; i < l; i += 1) {
                    alert = new Alert(arguments[i]);
                    alerts.push(alert);
                    $timeout(timeoutFunction(alert), 4000);
                }
            }
        };
    }]);
