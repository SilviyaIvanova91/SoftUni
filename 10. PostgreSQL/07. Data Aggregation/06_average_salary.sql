SELECT
	department_id,
	avg(salary) AS avg_salary
FROM
	employees
GROUP BY department_id
ORDER BY department_id;