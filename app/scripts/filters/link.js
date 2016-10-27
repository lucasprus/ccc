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
                return;
            }

            if (obj.sys.linkType === 'Asset') {
                if (_.startsWith(obj.__contentType, 'image')) {
                    return '<img src="' + obj.__url + '" width="100">';
                }

                if (obj.__contentType === 'application/pdf') {
                    return '<span>PDF file</span>';
                }
            } else if (obj.sys.linkType === 'Entry') {
                return obj.sys.id;
            }
        };
    });
