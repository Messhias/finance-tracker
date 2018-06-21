var app = angular.module('FinanceTrackerApp',[])
    .factory('stockService', ['$http', function($http){
        var stockApi = {};
        stockApi.searchStocks = function(symbol){
           return $http.get('/search_stocks.json?stock=' + symbol);
        }
        return stockApi;
     }])
    .controller('stocksController', ['$scope', 'stockService', function($scope, stockService){
        $scope.stock = {}
        $scope.lookup = function(){
            if($scope.ticker != undefined && $scope.ticker != ''){
                        stockService.searchStocks($scope.ticker)
                           .then(function(response){}, function(response){});
                           } else {
                          $scope.stock = {}
        }
    }
}])
