var myAppModule = angular.module("myAppModule",[]);
 
 myAppModule.controller('DeseaseController',function ($scope,$http) {
	 
	//$scope.data = {}; 

 	$scope.search_desease = function(){
  	
  	var search_term = {desease: $scope.desease};
  	$scope.desease_datas =[];

 		$http.post('/data',search_term).success(function(server_response){
 			 console.log(server_response);
 			 //$scope.datas = server_response.statuses;
 			 var data = server_response.statuses;

 			 for (var i = 0; i < data.length; i++) {
 			    if(	data[i].user.location !== "" ){
 			    	$scope.desease_datas.push(data[i]);
 			    }
 			 }
 		});


 	}

});
