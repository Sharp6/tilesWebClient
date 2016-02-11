require.config({
	shim : {
		"bootstrap" : { "deps" :['jquery'] }
	},
	paths: {
		jquery: '/libraries/jquery.min',
		knockout: '/libraries/knockout',
		bootstrap: '/libraries/bootstrap.min'
	}
});

require(["knockout", "viewmodels/menu.vm.client"], 
	function(ko, MenuVM) {

	var menuVM = new MenuVM();
	menuVM.init();
	ko.applyBindings(menuVM);
});