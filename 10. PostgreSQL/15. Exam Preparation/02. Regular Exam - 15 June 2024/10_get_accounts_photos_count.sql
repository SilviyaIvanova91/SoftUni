CREATE OR replace function udf_accounts_photos_count(
	account_username VARCHAR(30)
) RETURNS int AS
$$
DECLARE
	photos_count int;
	BEGIN
		SELECT
			COUNT(p.id)
		INTO
			photos_count
		FROM
			photos as p
		JOIN
			accounts_photos as ap
		ON
			p.id= ap.photo_id
		JOIN
			accounts as a
		ON
			a.id = ap.account_id
		WHERE a.username = account_username;
		RETURN photos_count;
	END;
$$
LANGUAGE plpgsql;

SELECT udf_accounts_photos_count('ssantryd') AS photos_count;
	
