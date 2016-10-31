'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:ItemsListCtrl
 * @description
 * # ItemsListCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('ItemsListCtrl', ['$scope', 'CONFIG', '$stateParams', '$http', '$uibModal', '$state', '$q', function($scope, CONFIG, $stateParams, $http, $uibModal, $state, $q) {
        var contentType = $stateParams.contentType;

        var contentTypeId = contentType.sys.id;
        var endpoint = 'entries?content_type=' + contentTypeId + '&order=fields.' + contentType.displayField + '&sys.type[ne]=' + (new Date()).valueOf();

        var page = $stateParams.page || 1;
        $scope.page = page;

        var paginationResultsPerPage = CONFIG.paginationResultsPerPage;
        $scope.paginationResultsPerPage = paginationResultsPerPage;

        var T = $scope.$root.T;
        var contentTypeName = $scope.$root.TC(contentType.name);

        var labelSingle = contentTypeName + ' single';
        var labelPlural = contentTypeName + ' plural';
        $scope.labelSingle = labelSingle;
        $scope.labelPlural = labelPlural;

        var listDisplayProperties = contentType.fields;

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

        $http.get(CONFIG.cdApiUrl + endpoint + '&skip=' + paginationResultsPerPage * (page - 1) + '&limit=' + paginationResultsPerPage, config).then(function(data) {
            var resultsTotal = data.data.total;

            var pagesTotal = Math.ceil(resultsTotal / paginationResultsPerPage);
            $scope.pagesTotal = pagesTotal;

            $scope.paginationRange = paginationRange(page, CONFIG.paginationLinksOffset, pagesTotal);

            var promises = [];
            var promise;

            data.data.items.forEach(function(item) {
                listDisplayProperties.forEach(function(control) {
                    var field = item.fields[control.id];

                    if (field) {
                        if (control.type === 'Link') {
                            if (control.linkType === 'Asset') {
                                promise = $http.get(CONFIG.cdApiUrl + 'assets/' +  field.sys.id).then(function(data) {
                                    var file = data.data.fields.file;

                                    field.__url = file.url;
                                    field.__contentType = file.contentType;
                                });

                                promises.push(promise);
                            }

                            if (control.linkType === 'Entry') {
                                promise = $http.get(CONFIG.cdApiUrl + 'entries/' +  field.sys.id).then(function(data) {
                                    field.__entry = data.data;
                                });

                                promises.push(promise);
                            }
                        } else if (control.type === 'Array') {
                            if (control.items.type === 'Link') {
                                if (control.items.linkType === 'Entry') {
                                    field.forEach(function(i) {
                                        promises.push($http.get(CONFIG.cdApiUrl + 'entries/' +  i.sys.id).then(function(data) {
                                            i.__entry = data.data;
                                        }));
                                    });
                                }
                            }
                        }
                    }
                });
            });

            $q.all(promises).then(function() {
                $scope.listDisplayProperties = listDisplayProperties;
                $scope.items = data.data.items;
            });
        });

        var deleteItem = function(sys) {
            var version = sys.version;
            var id = sys.id;

            var deleteConfig = {
                errorMessage: T.HTTP_DELETE_ERROR_NOTIFICATION + labelSingle,
                headers: {
                    'X-Contentful-Version': version
                }
            };

            var putConfig = {
                successMessage: labelSingle + T.HTTP_DELETE_SUCCESS_NOTIFICATION,
                errorMessage: T.HTTP_DELETE_ERROR_NOTIFICATION + labelSingle,
                headers: {
                    'X-Contentful-Version': version
                }
            };

            $http.delete(CONFIG.cmApiUrl + 'entries/' + id + '/published', deleteConfig).then(function() {
                $http.put(CONFIG.cmApiUrl + 'entries/' + id + '/archived', null, putConfig).then(function() {
                    $state.go('.', {page: 1}, {reload: $state.current});

                    /*var t = (function xxx() {
                        return $timeout(function() {
                            $http.get(CONFIG.cdApiUrl + 'entries?sys.id=' + data.data.sys.id).then(function(data) {
                                if (data.data.items.length === 0) {
                                    $timeout(function() {
                                        $state.go('.', {page: 1}, {reload: $state.current});
                                    });
                                } else {
                                    t = xxx();
                                }
                            });
                        }, 1000);
                    })();*/
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

        $scope.join = function(value) {
            if (_.isArray(value)) {
                return value.join(', ');
            }
        };

        $scope.startsWith = _.startsWith;
    }]);
