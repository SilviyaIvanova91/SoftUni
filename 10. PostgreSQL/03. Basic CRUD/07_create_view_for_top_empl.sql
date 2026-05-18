CREATE VIEW top_paid_employee AS
Select * FROM employees
ORDER by salary DESC LIMIT 1;

SELECT * from top_paid_employee;