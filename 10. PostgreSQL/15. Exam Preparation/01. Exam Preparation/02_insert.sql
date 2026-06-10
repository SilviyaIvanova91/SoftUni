INSERT INTO
	clients(full_name, phone_number)
SELECT
	first_name || ' ' || last_name,
	'(088) 9999' || id * 2
FROM
	drivers
where
 id between 10 and 20;

-- RETURNING *;