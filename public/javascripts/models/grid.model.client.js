define(['knockout'], function(ko) {
	var GridModel = function(data) {
		var self = this;

		self.gridId = ko.observable(data.gridId);

		self.rowDim = ko.observable(data.rowDim);
		self.colDim = ko.observable(data.colDim);
	};

	return GridModel;
});