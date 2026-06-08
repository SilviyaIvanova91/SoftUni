CREATE or REPLACE FUNCTION fn_get_country_id(IN country varchar, OUT c_id INT, OUT status INT)
AS
$$
	BEGIN
		select id from countries where name = country INTO c_id;
		IF c_id IS NOT NULL then
			status := 0;
		ELSE	
			status := 100;
		end if;
	end;
$$
LANGUAGE plpgsql;

select * from fn_get_country_id('Bulgaria')
