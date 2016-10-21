'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:ItemsDetailCtrl
 * @description
 * # ItemsDetailCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('ItemsDetailCtrl', ['$scope', '$http', '$stateParams', 'CONFIG', function($scope, $http, $stateParams, CONFIG) {
        var contentType = $stateParams.contentType;

        var itemEndpoint = CONFIG.cdApiUrl + 'entries/' + $stateParams.id + '?sys.type[ne]=' + (new Date()).valueOf();

        var T = $scope.$root.T;
        var contentTypeName = $scope.$root.TC(contentType.name);

        var labelSingle = contentTypeName + ' single';
        $scope.labelSingle = labelSingle;

        $scope.formControls = contentType.fields;

        var config = {
            errorMessage: T.HTTP_GET_ERROR_NOTIFICATION + labelSingle
        };

        $http.get(itemEndpoint, config).then(function(data) {
            $scope.item = data.data;
        });
    }]);
