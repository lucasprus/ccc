'use strict';

/**
 * @ngdoc function
 * @name contentfulCustomCmsApp.controller:ItemsAddEditCtrl
 * @description
 * # ItemsAddEditCtrl
 * Controller of the contentfulCustomCmsApp
 */
angular.module('contentfulCustomCmsApp')
    .controller('ItemsAddEditCtrl', ['$scope', '$http', '$stateParams', '$state', 'Utilities', 'CONFIG', '$uibModal', '$q', 'Upload', '$timeout', function($scope, $http, $stateParams, $state, Utilities, CONFIG, $uibModal, $q, Upload, $timeout) {
        var contentType = $stateParams.contentType;

        var mode = $stateParams.mode;
        $scope.mode = mode;

        var returnState = $stateParams.returnState;
        $scope.returnState = returnState;

        var endpoint = 'entries';

        var T = $scope.$root.T;
        var contentTypeName = $scope.$root.TC(contentType.name);

        var labelSingle = contentTypeName + ' single';
        $scope.labelSingle = labelSingle;

        var formControls = contentType.fields;

        var dataToPost = function() {
            var result = {};

            formControls.forEach(function(control) {
                var id = control.id;

                result[id] = $scope.item[id];

                if (control.type === 'Link' && control.linkType === 'Asset' && result[id]) {
                    if (result[id].constructor.name === "Blob" || result[id].constructor.name === "File") {
                        var name = result[id].name;
                        var type = result[id].type;

                        result[id] = Upload.upload({
                            url: CONFIG.uploadUrl + 'upload',
                            data: {file: result[id]}
                        }).then(function(data) {
                            var dataToPost = {
                                fields: {
                                    title: {
                                        en: name
                                    },
                                    file: {
                                        en: {
                                            contentType: type,
                                            fileName: name,
                                            upload: data.data.url
                                        }
                                    }
                                }
                            };

                            return $http.post(CONFIG.cmApiUrl + 'assets', dataToPost, {headers: {'Content-Type': 'application/vnd.contentful.management.v1+json'}}).then(function(data) {
                                var config = {
                                    headers: {
                                        'X-Contentful-Version': data.data.sys.version
                                    }
                                };

                                var id = data.data.sys.id;

                                return $http.put(CONFIG.cmApiUrl + 'assets/' + id + '/files/en/process', null, config).then(function(data) {
                                    var config = {
                                        headers: {
                                            'X-Contentful-Version': 2
                                        }
                                    };

                                    return $timeout(function() {
                                        return $http.put(CONFIG.cmApiUrl + 'assets/' + id + '/published', null, config).then(function(data) {
                                            return {
                                                sys: {
                                                    type: 'Link',
                                                    linkType: 'Asset',
                                                    id: data.data.sys.id
                                                }
                                            };
                                        });
                                    }, 3000);
                                });
                            });
                        });
                    } else {
                        delete result[id].__url;
                        delete result[id].__contentType;
                    }
                }
            });

            return result;
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

                $q.all(dataToPost()).then(function(data) {
                    var dataToPost = _.mapValues(data, function(value) {
                        return {
                            en: value
                        };
                    });

                    return $http.post(CONFIG.cmApiUrl + 'entries', {fields: dataToPost}, config).then(function(data) {
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
                var itemFields = data.data.fields;

                var promises = [];
                var promise;

                formControls.forEach(function(control) {
                    if (control.type === 'Link' && control.linkType === 'Asset' && itemFields[control.id] && itemFields[control.id].sys) {
                        promise = $http.get(CONFIG.cdApiUrl + 'assets/' +  itemFields[control.id].sys.id).then(function(data) {
                            itemFields[control.id].__url = data.data.fields.file.url;
                            itemFields[control.id].__contentType = data.data.fields.file.contentType;
                        });

                        promises.push(promise);
                    }
                });

                $q.all(promises).then(function() {
                    $scope.item = itemFields;
                });
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

                $q.all(dataToPost()).then(function(data) {
                    var dataToPost = _.mapValues(data, function(value) {
                        return {
                            en: value
                        };
                    });

                    return $http.put(CONFIG.cmApiUrl + endpoint + '/' + id, {fields: dataToPost}, config).then(function(data) {
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
        $scope.isPdf = Utilities.strings.isPdf;
    }]);
