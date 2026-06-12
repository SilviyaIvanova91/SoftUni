DELETE from addresses
WHERE
	id % 2 = 0
		AND
	lower(street) LIKE '%r%'
RETURNING *;

