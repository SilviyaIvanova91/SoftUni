CREATE OR REPLACE FUNCTION fn_cash_in_users_games(
	game_name varchar(50)
) RETURNS TABLE(
	total_cash NUMERIC
)
AS
$$
DECLARE

BEGIN
	RETURN QUERY
	WITH ranked_games
	AS (
		SELECT
			cash,
			ROW_NUMBER() OVER (ORDER BY cash DESC) AS row_num
		FROM
			games as g
		JOIN
			users_games as ug
		ON
			g.id = ug.game_id
		WHERE
			g.name = game_name
	)

	SELECT
		ROUND(SUM(cash), 2)
	FROM
		ranked_games
	WHERE
		row_num % 2 <> 0;
END;
$$
LANGUAGE plpgsql;

SELECT fn_cash_in_users_games('Love in a mist')

-- SELECT
-- *
-- FROM
-- users_games
-- JOIN
-- games
-- ON
-- games.id = users_games.game_id
-- WHERE
-- name = 'Love in a mist';