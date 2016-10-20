'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:ItemsAddEditCtrl
 * @description
 * # ItemsAddEditCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('ItemsAddEditCtrl', ['$scope', '$http', '$stateParams', '$state', 'Utilities', 'CONFIG', '$uibModal', '$q', function($scope, $http, $stateParams, $state, Utilities, CONFIG, $uibModal, $q) {
        var contentType = $stateParams.contentType;

        var mode = $stateParams.mode;
        $scope.mode = mode;

        var returnState = $stateParams.returnState;
        $scope.returnState = returnState;

        var endpoint = 'entries';

        var T = $scope.$root.T;
        var labelSingle = contentType.name + ' single';
        $scope.labelSingle = labelSingle;

        var formControls = contentType.fields;

        var dataToPost = function() {
            var fields = {};

            formControls.forEach(function(control) {
                var id = control.id;

                fields[id] = {
                    'en-US': $scope.item[id]
                };

                /*if (control.type === 'file' && angular.isObject(result[name])) {
                    result[name] = Upload.upload({
                        url: CONFIG.cmApiUrl + 'upload',
                        data: {file: result[name]}
                    }).then(function(data) {
                        return data.data.url;
                    });
                }

                if (control.type === 'image' && result[name] && result[name].indexOf('data:') === 0) {
                    result[name] = Upload.upload({
                        url: CONFIG.cmApiUrl + 'upload',
                        data: {file: Upload.dataUrltoBlob(result[name], $scope.item.imageFile.name)}
                    }).then(function(data) {
                        return data.data.url;
                    });
                }*/
            });

            return {
                fields: fields
            };
        };

        if (mode === 'add') {
            $scope.submit = function() {
                if ($scope.requestInProgress) {
                    return;
                }
                $scope.requestInProgress = true;

                var config = {
                    errorMessage: T.HTTP_POST_ERROR_NOTIFICATION + labelSingle,
                    headers: {
                        'X-Contentful-Content-Type': contentType.sys.id
                    }
                };

                $q.all(dataToPost()).then(function(dataToPost) {
                    return $http.post(CONFIG.cmApiUrl + 'entries', dataToPost, config).then(function(data) {
                        var sys = data.data.sys;

                        var config = {
                            successMessage: labelSingle + T.HTTP_POST_SUCCESS_NOTIFICATION,
                            errorMessage: T.HTTP_POST_ERROR_NOTIFICATION + labelSingle,
                            headers: {
                                'X-Contentful-Version': sys.version
                            }
                        };

                        return $http.put(CONFIG.cmApiUrl + 'entries/' + sys.id + '/published', null, config).then(function() {
                            $state.go(returnState || '^.list');
                        }, function() {
                            return $http.delete(CONFIG.cmApiUrl + 'entries/' + sys.id);
                        });
                    });
                }).finally(function() {
                    $scope.requestInProgress = false;
                });
            };

            $scope.primaryButtonLabel = T.ADD;
        } else if (mode === 'edit') {
            var id = $stateParams.id;
            var itemEndpoint = CONFIG.cdApiUrl + endpoint + '/' + id + '?sys.type[ne]=' + (new Date()).valueOf();
            var sys;

            var config = {
                errorMessage: T.HTTP_GET_ERROR_NOTIFICATION + labelSingle
            };

            $http.get(itemEndpoint, config).then(function(data) {
                var item = data.data;

                /*formControls.forEach(function(control) {
                    var name = control.name;

                    if (control.embed && item[control.embed]) {
                        item[name] = item[control.embed].id;
                    }
                });*/

                $scope.item = item.fields;
            });

            $http.get(CONFIG.cmApiUrl + endpoint + '/' + id + '?sys.type[ne]=' + (new Date()).valueOf(), config).then(function(data) {
                sys = data.data.sys;
            });

            $scope.submit = function() {
                if ($scope.requestInProgress) {
                    return;
                }
                $scope.requestInProgress = true;

                var config = {
                    errorMessage: T.HTTP_PUT_ERROR_NOTIFICATION + labelSingle,
                    headers: {
                        'X-Contentful-Version': sys.version
                    }
                };

                $q.all(dataToPost()).then(function(dataToPost) {
                    return $http.put(CONFIG.cmApiUrl + endpoint + '/' + id, dataToPost, config).then(function(data) {
                        sys = data.data.sys;

                        var config = {
                            successMessage: labelSingle + T.HTTP_PUT_SUCCESS_NOTIFICATION,
                            errorMessage: T.HTTP_PUT_ERROR_NOTIFICATION + labelSingle,
                            headers: {
                                'X-Contentful-Version': sys.version
                            }
                        };

                        return $http.put(CONFIG.cmApiUrl + 'entries/' + id + '/published', null, config).then(function() {
                            $state.go(returnState || '^.list');
                        });
                    });
                }).finally(function() {
                    $scope.requestInProgress = false;
                });
            };

            $scope.primaryButtonLabel = T.SAVE;
        }

        $scope.setControlsToDirty = Utilities.forms.setControlsToDirty;

        $scope.item = {};

        /*formControls.forEach(function(control) {
            if (control.endpoint) {
                $http.get(CONFIG.cmApiUrl + control.endpoint).then(function(data) {
                    control.options = control.optionsFilter ? Filters[control.optionsFilter](data.data) : data.data;
                });
            }
        });*/
        $scope.formControls = formControls;

        $scope.get = _.get;
        $scope.find = _.find;

        $scope.required = function(required) {
            if (!required) {
                return;
            }

            return required.when && $scope.$root.user && $scope.$root.user[required.when] || required.when && $scope.item[required.when] || required.value;
        };
    }]);
