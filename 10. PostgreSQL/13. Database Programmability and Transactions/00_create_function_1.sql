CREATE or REPLACE FUNCTION fn_get_initials(varchar, varchar)
RETURNS VARCHAR(5) AS
$$ 
	DECLARE
		first_name alias for $1;
		last_name alias for $2;
	BEGIN
		RETURN concat(LEFT(first_name, 1), '.', LEFT(last_name, 1), '.' );
	END
$$
LANGUAGE plpgsql;

select fn_get_initials('Cvetan', 'Tomov')