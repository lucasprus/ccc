'use strict';

/**
 * @ngdoc overview
 * @name contentfulCustomCmsApp
 * @description
 * # contentfulCustomCmsApp
 *
 * Main module of the application.
 */
angular
    .module('contentfulCustomCmsApp', [
        'ngAnimate',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.bootstrap'
    ])
    .constant('CONFIG', {
        apiURL: 'https://api.contentful.com/spaces/in1ws0j2cnhw/',
        paginationResultsPerPage: 5,
        paginationLinksOffset: 3
    })
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push(['$rootScope', 'Utilities', '$q', function($rootScope, Utilities, $q) {
            return {
                response: function(response) {
                    var successMessage = response.config.successMessage;

                    if (successMessage) {
                        Utilities.handlers.success(successMessage);
                    }

                    return response;
                },
                responseError: function(rejection) {
                    var errorMessage = rejection.config.errorMessage;

                    if (errorMessage) {
                        Utilities.handlers.error(errorMessage, rejection.data);
                    }

                    return $q.reject(rejection);
                }
            };
        }]);
    }])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when('', '/')
            .otherwise('404');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'views/404.html'
            });

        var contentTypes = contentfulCustomCmsAppData.contentTypes;

        $stateProvider
            .state('admin', {
                url: '/admin',
                templateUrl: 'views/admin.html',
                controller: ['$scope', function($scope) {
                    $scope.contentTypes = contentfulCustomCmsAppData.contentTypes;
                }],
                redirectTo: contentTypes[0] ? 'admin.' + contentTypes[0].sys.id : 'home'
            });

        contentTypes.forEach(function(section) {
            var id = section.sys.id;

            $stateProvider
                .state('admin.' + id, {
                    url: '/' + id,
                    templateUrl: 'views/items.html',
                    redirectTo: 'admin.' + id + '.list',
                    params: {
                        contentType: section
                    }
                })
                .state('admin.' + id + '.list', {
                    url: '/list',
                    templateUrl: 'views/items.list.html',
                    controller: 'ItemsListCtrl',
                    params: {page: 1}
                })
                .state('admin.' + id + '.add', {
                    url: '/add',
                    templateUrl: 'views/items.addEdit.html',
                    controller: 'ItemsAddEditCtrl',
                    params: {mode: 'add'}
                })
                .state('admin.' + id + '.edit', {
                    url: '/edit/:id',
                    templateUrl: 'views/items.addEdit.html',
                    controller: 'ItemsAddEditCtrl',
                    params: {mode: 'edit'}
                })
                .state('admin.' + id + '.detail', {
                    url: '/detail/:id',
                    templateUrl: 'views/items.detail.html',
                    controller: 'ItemsDetailCtrl'
                });
        });

    }])
    .run(['$http', function($http) {
        $http.defaults.headers.common.Authorization = 'Bearer ef7b0d42ac9b1ca71be8137f1c406c6c489d2678ff16135ddea89f75561d3cc1';
    }])
    .run(['$rootScope', '$state', '$timeout', function($rootScope, $state, $timeout) {
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();

                $timeout(function() {
                    $state.go(to.redirectTo, params);
                });
            }
        });
    }])
    .run(['$rootScope', 'ENLanguagePack', function($rootScope, ENLanguagePack) {
        $rootScope.T = ENLanguagePack;
    }]);

