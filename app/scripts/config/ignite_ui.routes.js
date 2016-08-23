'use strict';

angular.module('myApp').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('ignite_ui', {
        templateUrl: 'views/common/main.html'
      })
      .state('ignite_ui.grid', {
        url: '/ignite_ui/grid',
        views: {
          "header@ignite_ui": {
            templateUrl: 'views/common/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
          },
          "main@ignite_ui": {
            templateUrl: "views/ignite_ui/grid.html",
            controller: 'GridController',
            controllerAs: 'vm'
          }
        }
      });
  }]);
