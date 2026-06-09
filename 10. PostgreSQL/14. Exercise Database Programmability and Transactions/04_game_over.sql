CREATE OR REPLACE FUNCTION fn_is_game_over(
	is_game_over BOOLEAN
) RETURNS TABLE(
	name varchar(50),
	game_type_id int,
	is_finished BOOLEAN
)
AS
$$
BEGIN
	RETURN QUERY
	SELECT
		g.name,
		g.game_type_id,
		g.is_finished
	FROM
		games as g
	WHERE
		g.is_finished = is_game_over;
END;
$$
LANGUAGE plpgsql;

SELECT fn_is_game_over(true)