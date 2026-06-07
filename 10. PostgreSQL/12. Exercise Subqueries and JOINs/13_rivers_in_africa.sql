SELECT
	country_name,
	river_name
FROM
	countries as c
LEFT JOIN
	countries_rivers as cr
USING
	(country_code)
LEFT JOIN
	rivers as r
ON
	r.id = cr.river_id
WHERE  
	c.continent_code = 'AF'
ORDER BY
	c.country_name
LIMIT 5;
