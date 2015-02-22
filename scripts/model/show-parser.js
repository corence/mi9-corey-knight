
'use strict';

module.exports = {
	extract_available_shows: function(doc) {
				var response = doc.payload.map(function(show) {
					return show;
				});
				return {"response": response};
			}
};
