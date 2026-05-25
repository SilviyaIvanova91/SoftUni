SELECT
	CASE
		WHEN salary < 1000 THEN 'Low (< 1000)'
		WHEN salary <= 3000 THEN 'Middle (1000-3000)'
		ELSE 'High (> 3000)'
	END AS "salary_range",
COUNT(salary) AS "salary_count"
FROM employees
GROUP BY "salary_range"
HAVING COALESCE(COUNT(salary) > 0, FALSE);