CREATE or REPLACE FUNCTION fn_add_country(c_name varchar, c_id int) 
RETURNS bool AS
$$		
	BEGIN
		INSERT INTO countries (id, name)
		VALUES (c_id, c_name);
		RETURN true;
		EXCEPTION
			when UNIQUE_VIOLATION THEN return false;
	END;
$$

LANGUAGE plpgsql;

SELECT fn_add_country('Finland', 9)
