'use strict';

angular.module('myApp')
  .controller("GridController", ['footballDataService',
    function (footballDataService) {

      var vm = this;
      init();

      function init() {

        vm.football = {
          contentLoaded: false,
          title: 'CompetitionList',
          data_source: []
        };

        footballDataService.getCompetitionList(2015).then(function (json) {
            console.log(json);
            vm.football.contentLoaded = true;
            vm.football.data_source = json;
          },
          function () {
            console.log('fail');
          });
      }
    }]);
