app.factory('Data', ['$http','toaster',
	
	function($http, toaster){
		
		var Services = 'app/api/';
		var obj = {};
		
		obj.toast = function(data){
			
			toaster.pop(data.status, "", data.message, 10000, 'trustedHtml');
			
		}
		
		obj.get = function(q){
			
			return $http.get( Services + q ).then(function(results){
				
				return results.data;
				
			})
			
		}
		
		obj.post = function(q, object){
			
			return $http.post(Services +q, object).then(function(results){
				
				 return results.data;
				
			});
			
		}
		
		obj.put = function(q, object){
			
			return $http.put(Services + q, object).then(function(results){
				
				return results.data;
				
			});
			
		}
		
		obj.delete = function(q){
			
			return $http.delete(Services +q).then(function(results){
				
				return results.data;
				
			})
			
		}
		
		return obj;
		
	}])