Create or replace FUNCTION fn_courses_by_client(
	phone_num VARCHAR(20)
) 
RETURNS int AS
$$
DECLARE
	num_courses INT;
BEGIN
	SELECT
		COUNT(*)
	INTO
		num_courses
	FROM
		courses as co
	JOIN
		clients as cl
	ON
		cl.id = co.client_id
	WHERE
		cl.phone_number = phone_num;

	RETURN num_courses;
END;
$$
LANGUAGE plpgsql;

-- SELECT fn_courses_by_client('(803) 6386812')
-- SELECT fn_courses_by_client('(831) 1391236')
SELECT fn_courses_by_client('(704) 2502909')