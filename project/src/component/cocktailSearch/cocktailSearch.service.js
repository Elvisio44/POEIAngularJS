(function() {
   'use strict';

   function coktailSearchService($http, searchConfigService) {
       var service = {};
       service.cocktailList = [];
       service.getCocktails = getCocktails;
       service.searchIng = searchConfigService;

       function getCocktails() {

	return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + service.searchIng.ingredient)
            .then(function(response){
                console.log('Success: %o', response);
                 service.cocktailList = response.data.drinks;

            })
            .catch(function(error){
                console.log('Error: %o', error);
                service.cocktailList = [];

            });
       }



       return service;
   }

   coktailSearchService.$inject = ['$http','searchConfigService'];

   angular.module('daproject')
       .factory('coktailSearchService', coktailSearchService);

})();
