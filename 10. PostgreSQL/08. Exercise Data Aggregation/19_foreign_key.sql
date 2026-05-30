CREATE TABLE employees_projects(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	employee_id INT REFERENCES employees(id),
	project_id INT REFERENCES projects(id)
	--employee_id INT,
	--project_id INT,
	-- FOREIGN KEY (employee_id)
)