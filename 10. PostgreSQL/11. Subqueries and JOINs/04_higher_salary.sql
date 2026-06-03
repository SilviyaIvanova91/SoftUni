SELECT
	count(*)
from employees
WHERE salary > (
SELECT
	avg(salary)
FROM employees
);

