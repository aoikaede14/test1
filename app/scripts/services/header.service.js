'use strict';

angular.module('myApp').factory('HeaderService', [
  function () {
    var header_items = [
      {
        active_state: 'sample_contents',
        ui_sref: 'sample_contents.main.content_a',
        label: 'ui.router'
      },
      {
        active_state: 'ignite_ui',
        ui_sref: 'ignite_ui.grid',
        label: 'ignite_ui'
      }
    ];

    return {
      getHeaderItems: function () {
        return header_items;
      }
    };
  }]);
