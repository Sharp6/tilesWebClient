define(['knockout'], function(ko) {
	var TileModel = function(data) {
		var self = this;

		self.tileId = ko.observable(data.tileId);
		self.label = ko.observable(data.label);

		self.rowPos = ko.observable(data.rowPos);
		self.colPos = ko.observable(data.colPos);
		self.rowInit = ko.observable(data.rowInit);
		self.colInit = ko.observable(data.colInit);
		self.rowDest = ko.observable(data.rowDest);
		self.colDest = ko.observable(data.colDest);

		self.emptyTile = ko.observable(data.empty);	

		self.cssPositionClasses = ko.computed(function() {
			return "row" + self.rowPos() + " col" + self.colPos();
		});
	};
	return TileModel;
});