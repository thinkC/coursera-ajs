(function(){
   'use strict';
    angular.module('MenuApp')
    .component('categories',{
        templateUrl:'src/templates/category.component.template.html',
        bindings:{
            items: '<'
        }
        
        
    })
     
})();