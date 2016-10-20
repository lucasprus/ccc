'use strict';

/**
 * @ngdoc service
 * @name contentfulCustomCmsApp.Utilities
 * @description
 * # Utilities
 * Factory in the contentfulCustomCmsApp.
 * Just a bunch of reusable functions to keep the code DRY. To be split into separate services as it grows
 */
angular.module('contentfulCustomCmsApp')
    .factory('Utilities', ['AlertMessages', function(AlertMessages) {
        var Utilities = {
            forms: {
                setControlsToDirty: function(form) {
                    angular.forEach(form, function(value) {
                        if (angular.isObject(value) && value.hasOwnProperty('$modelValue')) {
                            value.$setDirty();
                        }
                    });
                }
            },
            handlers: {
                error: function(message, data) {
                    if (data) {
                        message += ': ' + data.message;

                        if (data.code) {
                            message += ' [ ' + data.code + ' ]';
                        }
                    } else {
                        message += '. Please check your internet connection and try again.';
                    }

                    AlertMessages.push({
                        type: 'danger',
                        message: message
                    });
                },
                success: function(message) {
                    AlertMessages.push({
                        type: 'success',
                        message: message
                    });
                }
            },
            strings: {
                isPdf: function(name) {
                    return _.endsWith(name, '.pdf');
                }
            }
        };

        return Utilities;
    }]);
