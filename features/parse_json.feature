
Feature: Parse json
	Scenario: Empty JSON document supplied
		When an empty document is passed
		Then return an empty document

	Scenario: DRM disabled and multiple episodes
		When a document is passed with no drm and with 3 episodes
		Then return an empty document
		
	Scenario: DRM enabled and no episodes
		When a document is passed with drm and with 0 episodes
		Then return an empty document

	Scenario: DRM enabled and multiple episodes
		When a document is passed with drm and with 3 episodes
		Then return a populated document

	Scenario: Malformed json
		When a non-json document is passed
		Then raise an exception
