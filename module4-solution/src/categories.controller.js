(function(){
   'use strict';
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    
    CategoriesController.$inject = ['items'];
    function CategoriesController(items){
        var cateCtrl = this;
    
        cateCtrl.items= items;
    }
      
})();