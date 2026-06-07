SELECT
	mc.country_code,
	COUNT(m.mountain_range) as mountain_range_count
FROM
	mountains_countries as mc
JOIN
	mountains as m
ON
	m.id = mc.mountain_id
WHERE
	mc.country_code IN ('BG', 'RU', 'US')
GROUP BY
	mc.country_code
ORDER BY
	 mountain_range_count DESC;