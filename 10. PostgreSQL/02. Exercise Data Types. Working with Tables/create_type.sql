CREATE TYPE address AS (
	street VARCHAR(100),
	city VARCHAR(20),
	zip_code CHAR(4)
);

CREATE TABLE customers_two (
	id INT GENERATED always as identity PRIMARY key,
	name VARCHAR(10),
	customer_address address
);

INSERT INTO
	customers_two(name, customer_address)
VALUES
	('Pesho', ('random', 'Sofia', 1623));

SELECT * from customers_two;