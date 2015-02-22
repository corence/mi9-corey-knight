
Feature: Parse json
	Scenario: Empty JSON document supplied
		When an empty document is passed
		Then parsing should return an error

	Scenario: DRM disabled and multiple episodes
		When a document is passed with no drm and with episodes available
		Then return an empty response list
		
	Scenario: DRM enabled and no episodes
		When a document is passed with drm and with no episodes available
		Then return an empty response list

	Scenario: DRM enabled and multiple episodes
		When a document is passed with drm and with episodes available
		Then return a populated response list

	Scenario: Malformed json
		When a non-json document is passed
		Then parsing should return an error

	Scenario: Payload with multiple records
		When a document is passed with many shows in it
		Then return a populated response list with many shows in it
