SELECT
	p.id as photo_id,
	COUNT(DISTINCT l.id) AS likes_count,
	COUNT(DISTINCT c.id) AS comments_count
FROM
	photos as p
LEFT JOIN
	comments as c
ON
	p.id = c.photo_id
LEFT JOIN
	likes as l
ON 
	l.photo_id = p.id
GROUP BY
	p.id
ORDER BY
	likes_count DESC,
	comments_count DESC,
	p.id ASC
;
