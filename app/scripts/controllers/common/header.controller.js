'use strict';

angular.module('myApp')
  .controller('HeaderController', ['HeaderService',
    function (HeaderService) {
      var vm = this;
      vm.header_items = HeaderService.getHeaderItems();
    }]);
