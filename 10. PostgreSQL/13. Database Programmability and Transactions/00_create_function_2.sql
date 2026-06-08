CREATE or REPLACE FUNCTION fn_get_initials(first_name varchar, last_name varchar)
RETURNS VARCHAR(5) AS
$$ 
	DECLARE
		tmp_var int;
	BEGIN
	tmp_var := 20;
		RETURN concat(LEFT(first_name, 1), '.', LEFT(last_name, 1), '.' );
	END
$$
LANGUAGE plpgsql;

select fn_get_initials('Cvetan', 'Tomov')