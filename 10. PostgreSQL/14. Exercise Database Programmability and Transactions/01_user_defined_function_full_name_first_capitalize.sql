create or REPLACE FUNCTION fn_full_name(
	first_name varchar(50),
	last_name varchar(50)
) RETURNS VARCHAR (101)
AS
$$
BEGIN
	RETURN INITCAP(first_name) || ' ' || INITCAP(last_name);
END;
$$
Language plpgsql;

SELECT  fn_full_name('dido', 'DIDO');