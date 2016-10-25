'use strict';

/**
 * @ngdoc filter
 * @name contentfulCustomCmsApp.filter:link
 * @function
 * @description
 * # link
 * Filter in the contentfulCustomCmsApp.
 */
angular.module('contentfulCustomCmsApp')
    .filter('link', function() {
        return function(obj) {
            if (!obj) {
                return obj;
            }

            if (_.startsWith(obj.__contentType, 'image')) {
                return '<img src="' + obj.__url + '" width="100">';
            }

            if (obj.__contentType === 'application/pdf') {
                return '<span>PDF file</span>';
            }
        };
    });
