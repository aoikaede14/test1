'use strict';

angular.module('myApp')
  .controller('ContentBController', ['$scope', 'a500pxService',
    function ($scope, a500pxService) {
      var vm = this;

      init();
      updatePhotos();

      $scope.$watch('vm.params', function () {
        updatePhotos();
      }, true);

      function updatePhotos() {
        a500pxService.getPhotos(vm.params).then(
          function (json) {
            vm.rsp = json;
          });
      }

      function init() {
        vm.title = '500px';
        vm.feature_list = [
          'popular',
          'editors',
          'fresh_week'
        ];
        vm.params = {
          feature: 'popular',
          current_page: 1
        };
      }
    }]);
