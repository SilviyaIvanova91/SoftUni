SELECT 
	p.first_name
	p.last_name
	t.name
FROM persons AS p
	JOIN towns AS t
		ON p.town = t.id;