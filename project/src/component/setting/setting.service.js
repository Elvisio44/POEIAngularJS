(function() {
    'use strict';

    function settingService() {
        var service = {};
        service.city = '';
        service.isCelsius = true;
        service.maProp = '';

      return service;
    }

    settingService.$inject = [];

    angular.module('daproject')
        .factory('settingService', settingService);

})();
