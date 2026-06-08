CREATE or REPLACE FUNCTION fn_count_employees_by_town(town_name varchar(20)) 
RETURNS int AS
$$
	DECLARE
		town_employees int;
	BEGIN
		SELECT
		Count(*)
		FROM employees as e
			JOIn addresses as a
			USING (address_id)
			JOIN towns as t
			USING(town_id)
			WHERE t.name = town_name
			INTO town_employees;
		RETURN town_employees;
	END;
$$

LANGUAGE plpgsql;

select fn_count_employees_by_town('Sofia');

