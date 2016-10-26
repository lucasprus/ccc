'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:ItemsDetailCtrl
 * @description
 * # ItemsDetailCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('ItemsDetailCtrl', ['$scope', '$http', '$stateParams', 'CONFIG', '$q', function($scope, $http, $stateParams, CONFIG, $q) {
        var contentType = $stateParams.contentType;

        var itemEndpoint = CONFIG.cdApiUrl + 'entries/' + $stateParams.id + '?sys.type[ne]=' + (new Date()).valueOf();

        var T = $scope.$root.T;
        var contentTypeName = $scope.$root.TC(contentType.name);

        var labelSingle = contentTypeName + ' single';
        $scope.labelSingle = labelSingle;

        var formControls = contentType.fields;

        var config = {
            errorMessage: T.HTTP_GET_ERROR_NOTIFICATION + labelSingle
        };

        $http.get(itemEndpoint, config).then(function(data) {
            var promises = [];

            formControls.forEach(function(control) {
                var item = data.data.fields[control.id];

                if (item) {
                    if (control.type === 'Link') {
                        if (control.linkType === 'Asset') {
                            promises.push($http.get(CONFIG.cdApiUrl + 'assets/' +  item.sys.id).then(function(data) {
                                item.__url = data.data.fields.file.url;
                                item.__contentType = data.data.fields.file.contentType;
                            }));
                        } else if (control.linkType === 'Entry') {
                            promises.push($http.get(CONFIG.cdApiUrl + 'entries/' +  item.sys.id).then(function(data) {
                                item.__entry = data.data;
                            }));
                        }
                    } else if (control.type === 'Array') {
                        if (control.items.type === 'Link') {
                            if (control.items.linkType === 'Entry') {
                                item.forEach(function(i) {
                                    promises.push($http.get(CONFIG.cdApiUrl + 'entries/' +  i.sys.id).then(function(data) {
                                        i.__entry = data.data;
                                    }));
                                });
                            }
                        }
                    }
                }
            });

            $q.all(promises).then(function() {
                $scope.formControls = formControls;
                $scope.item = data.data;
            });
        });

        $scope.join = function(value) {
            if (_.isArray(value)) {
                return value.join(', ');
            }
        };

        $scope.linkEntry = function(item) {
            if (item && item.__entry) {
                return item.__entry.sys.contentType.sys.id + ' :: ' + item.__entry.sys.id;
            }
        };
    }]);
