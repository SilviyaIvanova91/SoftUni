SELECT 
	CONCAT(name, ' ', state) AS cities_information,
	-- CONCAT_WS(' ', name, state) AS cities_information
	-- name || ' ' || state AS "cities_information" - ако имаме стойност NULL целия запис става NULL
	area AS "area_km2"
	-- area AS area_km2
FROM cities;
