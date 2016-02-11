define(['knockout', 'jquery', 'models/tile.model.client'], function(ko, $, Tile) {
	var GridModel = function(data) {
		var self = this;

		self.gridId = ko.observable(data.gridId);

		self.rowDim = ko.observable(data.rowDim);
		self.colDim = ko.observable(data.colDim);

		self.tiles = ko.observableArray();

		data.tiles.forEach(function(tileData) {
			var newTile = new Tile(tileData);
			self.tiles.push(newTile);
		});

		self.doMove = function(tile) {
			console.log(self.gridId(), tile.tileId());
			$.ajax({
				url: 'http://127.0.0.1:3000/api/actions/move/'+self.gridId()+'/'+tile.tileId(),
				dataType: 'json',
				success: function(data, textStatus) {
					console.log(data);
					data.grid.tiles.forEach(function(tileData) {
						var thisTile = ko.utils.arrayFirst(self.tiles(), function(tile) {
							return tile.tileId() === tileData.tileId
						});
						thisTile.rowPos(tileData.rowPos);
						thisTile.colPos(tileData.colPos);
					});
				}
			});

		}
	};

	return GridModel;
});