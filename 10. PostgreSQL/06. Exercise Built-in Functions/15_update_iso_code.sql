UPDATE	
	countries
SET
	iso_code = UPPER(LEFT(country_name,3))
WHERE
	iso_code IS NULL;

SELECT
	iso_code
FROM
	countries;