(function(){
   'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);
    
    function FoundItemsDirective(){
        var ddo = {
            templateUrl : 'foundItem.html',
            scope : {
                items : '<',
                onRemove: '&'
            }
        }
        return ddo;
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var narrowCtrl = this;
        // narrowCtrl.found = [];
        narrowCtrl.search = function(searchTerm){
            narrowCtrl.found = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
            ;
            
        };

        narrowCtrl.remove = function(index){
            narrowCtrl.found.splice(index, 1);
        }
        
    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http,ApiBasePath){
        var service = this;
        
        
        service.getData = function(){
            $http({
                method: "GET",
                url:(ApiBasePath + "/menu_items.json")
            }).then(function(response){
                console.log(response.data )
                service.data = response.data;
                
                
            },function errorCallback(response){
                service.data= "Something went wrong";

            });
            
            
        };
        
        
            service.getData()
        
        service.getMatchedMenuItems =function(searchTerm){
              var items = service.data.menu_items;
              console.log(items)
              var found = [];
              for(var i = 0; i < items.length; i++){
                  var desc = items[i].description;
                  
                if(desc.indexOf(searchTerm) > - 1){
                    found.push(items[i])
                
            }
            
        };
              return found;
          }
        
    }

})();

