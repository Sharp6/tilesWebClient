define(['knockout', 'models/grid.model.client', 'da/grid.da.client'], function(ko, Grid, GridDA) {
	var MenuVM = function() {
		var self = this;
		self.da = new GridDA();

		self.grids = ko.observableArray();
		self.selectedGrid = ko.observable();

		self.loadGrids = function() {
			self.da.getGrids()
				.then(function(gridsData) {
					var mappedGrids = gridsData.map(function(gridData) {
						return new Grid(gridData);
					});
					self.grids(mappedGrids);
				});
		}

		self.init = function() {
			self.loadGrids();
		}
	}

	return MenuVM;
});