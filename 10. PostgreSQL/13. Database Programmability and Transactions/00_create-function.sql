CREATE or REPLACE FUNCTION fn_get_initials(varchar, varchar)
RETURNS VARCHAR(5) AS
$$ 
	BEGIN
		RETURN concat(LEFT($1, 1), '.', LEFT($2, 1), '.' );
	END
$$
LANGUAGE plpgsql;

select fn_get_initials('Cvetan', 'Tomov')