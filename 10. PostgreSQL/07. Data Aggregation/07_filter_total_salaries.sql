SELECT
	department_id,
	sum(salary) AS "Total Salary"
FROM
	employees
GROUP BY department_id
HAVING sum(salary) < 4200
ORDER BY department_id;