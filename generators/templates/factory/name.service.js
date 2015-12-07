'use strict';

(function() {

  function <%= classedName %>Service() {
    var meaningOfLife = 42;


    var <%= classedName %> = {

      /**
       * Get the the meaning of life the universe and everything
       */
      getMeaningOfLife: function() {
        return meaningOfLife;
      }
    };

    return <%= classedName %>;
  }

  angular.module('<%= scriptAppName %>')
    .factory('<%= classedName %>', <%= classedName %>Service);

})();
