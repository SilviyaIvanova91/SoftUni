CREATE OR replace PROCEDURE udp_modify_account (
	address_street VARCHAR(30), 
	address_town VARCHAR(30)
) AS
$$
	BEGIN
		UPDATE
			accounts as ac
		SET job_title = '(Remote) ' || job_title
		FROM
			addresses as a
		WHERE 
			a.account_id = ac.id
				AND
			a.street = address_street
				AND
			a.town = address_town;
	END;
$$
LANGUAGE plpgsql;

CALL udp_modify_account('97 Valley Edge Parkway', 'Divinópolis');
SELECT a.username, a.gender, a.job_title FROM accounts AS a
WHERE a.job_title ILIKE '(Remote)%';

	
