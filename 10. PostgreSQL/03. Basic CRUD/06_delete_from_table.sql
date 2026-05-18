DELETE FROM employees
WHERE department_id = 2 OR department_id = 1;
-- WHERE department_id IN (1,2)
-- WHERE department_id BETWEEN 1 AND 2
SELECT * FROM employees
ORDER by id;