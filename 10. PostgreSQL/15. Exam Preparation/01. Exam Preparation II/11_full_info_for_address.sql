CREATE TABLE search_results(
    id SERIAL PRIMARY KEY,
    address_name VARCHAR(50),
    full_name VARCHAR(100),
    level_of_bill VARCHAR(20),
    make VARCHAR(30),
    condition CHAR(1),
    category_name VARCHAR(50)
);

create or replace PROCEDURE sp_courses_by_address(
	address_name varchar(100)
)AS
$$
BEGIN
	TRUNCATE search_results;

	INSERT INTO search_results(
		address_name,
   	 	full_name,
    	level_of_bill,
    	make,
    	condition,
	    category_name
	) 
	SELECT
		a.name,
		cl.full_name,
		CASE
			WHEN co.bill <= 20 THEN 'Low'
			WHEN co.bill <= 30 THEN 'Medium'
			ELSE 'High'
		END AS level_of_bill,
		cr.make,
		cr.condition,
		ca.name AS category_name
	FROM
		addresses AS a
	JOIN
		courses AS co
	ON
		co.from_address_id = a.id
	JOIN
		clients AS cl
	ON
		cl.id = co.client_id
	JOIN
		cars AS cr
	ON
		cr.id = co.car_id
	JOIN	
		categories AS ca
	ON
		ca.id = cr.category_id
	WHERE
		a.name = address_name
	ORDER BY
		cr.make,
		cl.full_name;
END
$$
LANGUAGE plpgsql;

-- CALL sp_courses_by_address('700 Monterey Avenue');

-- SELECT * FROM search_results;

CALL sp_courses_by_address('66 Thompson Drive');

SELECT * FROM search_results;

