(function() {
 'use strict';

    angular.module('daproject')
   .directive('cocktailElement', function() {
     return {
       templateUrl: 'src/components/coktail/coktail.html',
       restrict: 'E',
       bindToController: {

       },
    scope: {},
       controller: 'cocktailCtrl',
       controllerAs: 'coke'
     };
   });

})();
