crecreate table employees(
id serial primary key not null,
first_name VARCHAR(30),
last_name VARCHAR(50),
hiring_date DATE DEFAULT '2023-01-01',
salary NUMERIC(10, 2),
devices_number INT
);
CREATE TABLE departments(
id serial primary key not null,
name varchar(50),
code char(3),
description text
);
CREATE TABLE issues(
id serial primary key unique,
description VARCHAR(150),
date date,
start timestamp
);
