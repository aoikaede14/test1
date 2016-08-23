'use strict';

angular.module('myApp').factory('footballDataService', ['$http', '$q',
  function ($http, $q) {
    var deffered = $q.defer();

    function get(api) {
      var url = '/api/football_data' + api;

      $http.get(url, {
          headers: {
            'Content-type': 'application/json'
          }
        })
        .success(function (json) {
          deffered.resolve(json);
        })
        .error(function () {
          deffered.reject();
        });
      return deffered.promise;
    }

    return {
      getCompetitionList: function (season) {
        return get("/v1/competitions/?season=" + season);
      }
    };
  }]);
