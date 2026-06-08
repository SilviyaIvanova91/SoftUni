CREATE or REPLACE PROCEDURE sp_increase_salaries(department_name varchar) 
AS
$$		
	BEGIN
		update employees
		set salary = salary * 1.05
		where department_id =
		(select department_id from departments where name = department_name);
	END;
$$

LANGUAGE plpgsql;

call sp_increase_salaries('Finance');

SELECT 
	first_name,
	salary
from employees
where department_id =
		(select department_id from departments where name = 'Finance')
ORDER BY 
	first_name,
	salary;
