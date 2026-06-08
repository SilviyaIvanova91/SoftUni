CREATE or REPLACE PROCEDURE sp_ass_country(IN c_name varchar, IN c_id int, OUT status bool) 
AS
$$		
	BEGIN
		Insert into countries (id, name)
		VALUES(c_id, c_name);
		status := TRUE;
		EXCEPTION
			when UNIQUE_VIOLATION then status := FALSE;
			RAISe notice 'ERROR: %', SQLERRM;
	END;
$$

LANGUAGE plpgsql;

call sp_ass_country('Greese', 22, true)
