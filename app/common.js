app.factory('Common', ['$http', 'toaster',function($http, toaster, Data){
	
	
	var obj = {
		
		errors : {
			
			status : false,
			message : 'Wrong userid or password!'
		}
		
	};
	
	return obj;
	
}])