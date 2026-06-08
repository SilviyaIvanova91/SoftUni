CREATE or REPLACE FUNCTION fn_get_persons() 
RETURNS TABLE (id int, full_name text, email varchar(40))
AS
$$		
	BEGIN
		RETURN QUERY (
			Select 
				p.id,
				concat(first_name, ' ', last_name),
				p.email
			FROM
				persons as p
		);
	END;
$$

LANGUAGE plpgsql;

SELECT fn_get_persons()
