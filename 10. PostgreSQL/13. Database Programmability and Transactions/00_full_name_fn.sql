CREATE or REPLACE FUNCTION fn_get_full_name(first_name varchar, last_name varchar)
RETURNS VARCHAR AS
$$
	DECLARE
		full_name varchar;
	BEGIN
		IF first_name IS NULL and last_name is NUll THEN
			full_name := NULL;
		ELSEIF first_name is NULL THEN
			full_name := last_name;
		ELSEIF last_name is NULL THEN
			full_name := first_name;
		Else 
			full_name := concat(first_name, ' ', last_name);
		end if;
		RETURN full_name;
	end;
$$
LANGUAGE plpgsql;

SELECT fn_get_full_name('Cvetan', 'Tomov');