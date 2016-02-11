define(['jquery'], function($){
	var GridDA = function() {
		var getGrids = function() {
			var url = "http://127.0.0.1:3000"
			return $.ajax({
				dataType: "json",
			  	url: url+"/api/grids"
			}).promise();
		};	

		return {
			getGrids: getGrids
		}
	}
	
	return GridDA;
});