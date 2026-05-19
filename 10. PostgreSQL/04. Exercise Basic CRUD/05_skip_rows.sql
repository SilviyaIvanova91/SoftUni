SELECT 
	id AS id,  
	CONCAT(first_name, ' ',middle_name, ' ', last_name) AS full_name,
	-- CONCAT_WS(' ', first_name, middle_name, last_name) AS full_name,
	hire_date
FROM 
	employees
ORDER BY
	hire_date ASC 
OFFSET 9;
