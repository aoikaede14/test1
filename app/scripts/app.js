'use strict';

angular.module('myApp', ['ui.router', 'ui.bootstrap', 'igniteui-directives'])
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    ['$urlRouterProvider',
      function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/sample_contents/content_a');
      }
    ]);
