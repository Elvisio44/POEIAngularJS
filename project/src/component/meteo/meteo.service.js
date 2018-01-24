(function() {
    'use strict';

    function meteoService($http, settingService) {
        var service = {};
        service.meteoListe = [];
        service.getMeteo = getMeteo;
        service.gigaService = settingService;


        function getData(ville, clef) {
	return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + ville +'&APPID='+ clef +'&units=metric' )
            .then(function(response){
                console.log('Success: %o', response);
                service.meteoListe = response.data.list;
                console.log(service.meteoListe);
            })
            .catch(function(error){
                console.log('Error: %o', error);
                service.meteoListe = [];
            });
}

        function getMeteo() {
            service.test =getData(/*service.gigaService.city*/"London", "f8a8c39ada7c40a82b3fd6b6d52d1a6a");

        }

      return service;
    }

    meteoService.$inject = ['$http', 'settingService'];

    angular.module('daproject')
        .factory('meteoService', meteoService);


})();
