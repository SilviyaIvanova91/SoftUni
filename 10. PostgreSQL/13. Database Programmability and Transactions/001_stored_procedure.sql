CREATE or REPLACE FUNCTION fn_show_msg(msg varchar) 
RETURNS bool AS
$$		
	BEGIN
		raise notice 'Very important notice: %', msg;
		RETURN true;
	END;
$$

LANGUAGE plpgsql;

select fn_show_msg('Hello mama')
