SELECT 
	CONCAT(first_name, ' ', last_name) AS "Full Name",
	AGE(died, born) AS "Life Span"
FROM 
	authors;