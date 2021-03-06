
'use strict';

module.exports = {
	parse_shows: function(string) {
					 return JSON.parse(string);
				 },
	
	extract_available_shows: function(doc) {
				var response = doc.payload.map(function(show) {
					if(!show.drm) return null;
					if(show.episodeCount <= 0) return null;
					
					return {
						"image": show.image.showImage,
						"slug": show.slug,
						"title": show.title,
					};
				});
				response = response.filter(function(x) { return x !== null; });
				return {"response": response};
			},
};
