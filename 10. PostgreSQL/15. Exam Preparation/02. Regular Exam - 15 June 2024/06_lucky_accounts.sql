SELECT
	CONCAT(a.id, ' ', a.username) as id_username,
	email
FROM
	accounts as a
JOIN
	accounts_photos as ap
ON
	a.id = ap.account_id
JOIN
	photos as p
ON 
	p.id = ap.photo_id
WHERE
	a.id = p.id
ORDER BY
	a.id ASC
;
