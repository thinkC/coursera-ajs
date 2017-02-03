
(function(){
    'use strict';
 angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController)
    
 LunchCheckController.$inject = ['$scope'];
   function LunchCheckController($scope){
     $scope.items = "";
       $scope.message = "";
       $scope.checkLength=function(){
           var itemInput = $scope.items.split(",");
//           return x.length;
           
           if(!$scope.items){
               $scope.message = "Please enter data first";
               $scope.color1 = {
                   "color" : "red",
               }
           }
           else if(itemInput.length <= 3){
               $scope.message = "Enjoy!";
               $scope.color1 = {
                   "color" : "green",
               }
           }else if(itemInput.length > 3){
               $scope.message = "Too much!"
               $scope.color1 ={
                   "color" : "green"
               }
           }
               
        

       }
      
   } 
    
    
    
})();


