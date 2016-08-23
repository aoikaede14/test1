'use strict';

angular.module('myApp').factory('a500pxService', ['$http', '$q',
  function ($http, $q) {

    return {
      getPhotos: function (params) {
        var deffered = $q.defer();
        console.log(params);

        $http.get('https://api.500px.com/v1/photos',
          {
            params: {
              consumer_key: 'UDYMPgppH1VmMIloQbPZwJnFUedSuTzscWR0M3Y8',
              sort: 'rating',
              only: 'Landscapes',
              feature: params.feature,
              page: params.current_page
            }
          }).then(function (rsp) {
            deffered.resolve(rsp.data);
          },
          function () {
            deffered.reject();
          });

        return deffered.promise;
      }
    };
  }]);
