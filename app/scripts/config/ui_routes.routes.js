'use strict';

angular.module('myApp').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('sample_contents', {
        templateUrl: 'views/common/main.html'
      })
      .state('sample_contents.main', {
        views: {
          "header@sample_contents": {
            templateUrl: 'views/common/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
          },
          "main@sample_contents": {
            templateUrl: 'views/sample_contents/layout.html'
          }
        }
      })
      .state('sample_contents.main.content_a', {
        url: '/sample_contents/content_a',
        views: {
          "main@sample_contents.main": {
            templateUrl: "views/sample_contents/content_a.html",
            controller: 'ContentAController',
            controllerAs: 'vm'
          }
        }
      })
      .state('sample_contents.main.content_b', {
        url: '/sample_contents/content_b',
        views: {
          "main@sample_contents.main": {
            templateUrl: "views/sample_contents/content_b.html",
            controller: 'ContentBController',
            controllerAs: 'vm'
          }
        }
      })
      .state('sample_contents.main.content_c', {
        url: '/sample_contents/content_c',
        views: {
          "main@sample_contents.main": {
            templateUrl: "views/sample_contents/content_c.html"
          }
        }
      });
  }]);
