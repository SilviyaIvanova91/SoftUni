SELECT
	e.employee_id,
	CONCAT(e.first_name, ' ', e.last_name) AS full_name,
	p.project_id,
	p.name as project_name
FROM employees as e
JOIN employees_projects as ep
-- ON ep.employee_id = e.employee_id
USING(employee_id)
JOIN projects as p
-- ON p.project_id = ep.project_id
USING(project_id)
WHERE p.project_id = 1;