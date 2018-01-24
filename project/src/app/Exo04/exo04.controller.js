(function() {
  'use strict';

  function Exo04Ctrl($location, settingService, meteoService) {
    var vm = this;
    vm.nomVille;
    vm.superService = settingService;
    vm.megaService = meteoService;

    vm.afficherVille = afficherVille;

      function afficherVille() {
          vm.superService.city = vm.nomVille;
          vm.megaService.getMeteo();
        }


  }

  Exo04Ctrl.$inject = ['$location', 'settingService', 'meteoService'];


  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();

/*(function() {
    'use strict';

    function HomeController(monService) {
      var vm = this;
      vm.superService = monService;
    }

    HomeController.$inject = ['monService'];

    angular.module('daproject')
        .controller('HomeController', HomeController);

})();*/
