'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:ItemsListCtrl
 * @description
 * # ItemsListCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('ItemsListCtrl', ['$scope', 'CONFIG', '$stateParams', '$http', '$uibModal', '$state', function($scope, CONFIG, $stateParams, $http, $uibModal, $state) {
        var contentType = $stateParams.contentType;

        var contentTypeId = contentType.sys.id;
        var endpoint = 'entries?content_type=' + contentTypeId + '&sys.publishedVersion[exists]=true';

        var page = $stateParams.page || 1;
        $scope.page = page;

        var paginationResultsPerPage = CONFIG.paginationResultsPerPage;
        $scope.paginationResultsPerPage = paginationResultsPerPage;

        var T = $scope.$root.T;
        var labelSingle = contentType.name + ' single';
        var labelPlural = contentType.name + ' plural';
        $scope.labelSingle = labelSingle;
        $scope.labelPlural = labelPlural;

        $scope.listDisplayProperties = contentType.fields;

        var paginationRange = function(currentPage, offset, pagesTotal) {
            var start;
            var end;

            if (pagesTotal <= 2 * offset + 1) {
                start = 1;
                end = pagesTotal;
            } else if (currentPage - offset <= 0) {
                start = 1;
                end = 2 * offset + 1;
            } else if (currentPage + offset > pagesTotal) {
                start = pagesTotal - 2 * offset;
                end = pagesTotal;
            } else {
                start = currentPage - offset;
                end = currentPage + offset;
            }

            return _.range(start, end + 1);
        };

        var config = {
            errorMessage: T.HTTP_GET_ERROR_NOTIFICATION + labelPlural
        };

        $http.get(CONFIG.apiURL + endpoint + '&skip=' + paginationResultsPerPage * (page - 1) + '&limit=' + paginationResultsPerPage, config).then(function(data) {
            var resultsTotal = data.data.total;

            var pagesTotal = Math.ceil(resultsTotal / paginationResultsPerPage);
            $scope.pagesTotal = pagesTotal;

            $scope.paginationRange = paginationRange(page, CONFIG.paginationLinksOffset, pagesTotal);

            $scope.items = data.data.items;
        });

        var deleteItem = function(sys) {
            var deleteConfig = {
                successMessage: labelSingle + T.HTTP_DELETE_SUCCESS_NOTIFICATION,
                errorMessage: T.HTTP_DELETE_ERROR_NOTIFICATION + labelSingle,
                'X-Contentful-Version': sys.version
            };

            var archiveConfig = {
                successMessage: labelSingle + T.HTTP_PUT_SUCCESS_NOTIFICATION,
                errorMessage: T.HTTP_PUT_ERROR_NOTIFICATION + labelSingle,
                'X-Contentful-Version': sys.version
            };

            $http.delete(CONFIG.apiURL + 'entries/' + sys.id + '/published', deleteConfig).then(function() {
                $http.put(CONFIG.apiURL + 'entries/' + sys.id + '/archived', archiveConfig).then(function() {
                    $state.go('.', {page: 1});
                });
            });
        };

        $scope.deleteItem = function(sys) {
            var modalInstance = $uibModal.open({
                templateUrl: 'views/confirmDeleteModal.html'
            });

            modalInstance.result.then(function() {
                deleteItem(sys);
            });

            $scope.$root.modal = modalInstance;
        };
    }]);
