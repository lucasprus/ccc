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
            var item = data.data;

            var promises = [];
            var promise;

            formControls.forEach(function(control) {
                if (control.type === 'Link' && control.linkType === 'Asset' && item.fields[control.id]) {
                    promise = $http.get(CONFIG.cdApiUrl + 'assets/' +  item.fields[control.id].sys.id).then(function(data) {
                        item.fields[control.id].__url = data.data.fields.file.url;
                        item.fields[control.id].__contentType = data.data.fields.file.contentType;
                    });

                    promises.push(promise);
                }
            });

            $q.all(promises).then(function() {
                $scope.formControls = formControls;
                $scope.item = item;
            });
        });

        $scope.join = function(value) {
            if (_.isArray(value)) {
                return value.join(', ');
            }
        };
    }]);
