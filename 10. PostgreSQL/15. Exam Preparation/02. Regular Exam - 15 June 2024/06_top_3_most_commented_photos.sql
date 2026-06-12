SELECT
	p.id as photo_id,
	p.capture_date,
	p.description,
	COUNT(c.id) as comments_count
FROM
	photos as p
JOIN
	comments as c
ON 
	p.id = c.photo_id
WHERE p.description IS NOT NULL
GROUP BY
	p.id
ORDER BY
	comments_count DESC,
	p.id ASC
LIMIT 3
;
