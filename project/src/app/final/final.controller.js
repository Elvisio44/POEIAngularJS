(function() {
  'use strict';

  function FinalCtrl($location, searchConfigService, coktailSearchService, cocktailElement) {
    var vm = this;
    vm.getIng = getIng;
    vm.serviceConf = searchConfigService;
      vm.serviceCoktail = coktailSearchService;
      vm.input = "input";

    function getIng() {
        vm.ing = vm.serviceConf.ingredient;
        vm.serviceCoktail.getCocktails();
    }


  }

  FinalCtrl.$inject = ['$location', 'searchConfigService', 'coktailSearchService', 'cocktailElement'];


  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
