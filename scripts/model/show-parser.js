
'use strict';

module.exports = {
	extract_available_shows: function(doc) {
				var response = doc.payload.map(function(show) {
					return {
						"image": show.image.showImage,
						"slug": show.slug,
						"title": show.title,
					};
				});
				return {"response": response};
			}
};
