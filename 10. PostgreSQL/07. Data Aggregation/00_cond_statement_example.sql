SELECT
	department_id,
	sum(salary) AS "Total Salary"
	sum(
		CASE
			WHEN department ="Marketing" THEN salary *1.2
			WHEN department = "Training" THEN salary * 1.8
			ELSE salary
		END
	)
FROM
	employees
GROUP BY department_id
ORDER BY department_id;