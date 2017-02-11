(function(){
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var toBuyCtrl = this;
        
        toBuyCtrl.toBuyItems = ShoppingListCheckOffService.getItems();
        
        toBuyCtrl.checkItem = function(index){
            ShoppingListCheckOffService.checkItem(index);
        }
             
    }
    
        
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var alreadyBoughtCtrl = this;
        alreadyBoughtCtrl.itemsBought = ShoppingListCheckOffService.itemsBought();
    }
    
    
    function ShoppingListCheckOffService(){
        var service = this;
        var boughtItem = [];
        var toBuyItems = [
            {name: 'rice', quantity: '10 bags'},
			{name: 'beans', quantity: '4 bags'},
			{name: 'Five Alive', quantity: '4 bottles'},
			{name: 'Water', quantity: '2 bottles'},
			{name: 'yam', quantity: '10 tubers'},
			{name: 'Milk', quantity: '4 bottles'}
            
        ];
        
        service.getItems = function(){
            
            return toBuyItems;
            
        }
        
        service.checkItem = function(itemIndex){
            boughtItem.push(toBuyItems.splice(itemIndex, 1))
            return boughtItem;
            
        }
      
        service.itemsBought = function(){
            return boughtItem;
        };
             
    }
    
})();