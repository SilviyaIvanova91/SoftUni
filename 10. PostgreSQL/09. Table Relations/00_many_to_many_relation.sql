create TABLE employees(
	id SERIAL PRIMARY key not null,
	name varchar(50) NOT NULL
);

create TABLE cars(
	id SERIAL PRIMARY key not null,
	name varchar(50) NOT NULL
);

create TABLE employees_car(
	employee_id int REFERENCES employees(id),
	car_id int REFERENCES cars(id),
	CONSTRAINT pk_employees_cars PRIMARY KEY(employee_id, car_id)
);

-- CREATE TABLE employees_projects(
-- employee_id INT,
-- project_id INT,

-- CONSTRAINT pk_employees_projects
-- PRIMARY KEY(employee_id, project_id),

-- CONSTRAINT fk_employees_projects_employees
-- FOREIGN KEY(employee_id)
-- REFERENCES employees(id),

-- CONSTRAINT fk_employees_projects_projects
-- FOREIGN KEY(project_id)
-- REFERENCES projects(id)
-- );
