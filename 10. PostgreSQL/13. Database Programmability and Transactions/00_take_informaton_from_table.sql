CREATE or REPLACE FUNCTION fn_get_country_id(country varchar)
RETURNS int AS
$$
	DECLARE
		country_id INT;
	BEGIN
		SELECT id from countries where name = country into country_id;
		RETURN country_id;
	end;
$$
LANGUAGE plpgsql;

-- SELECT id from countries Where name = 'Bulgaria'

SELECT fn_get_country_id('France')