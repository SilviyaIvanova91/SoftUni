Delete from clients
where
	length(full_name) > 3
		AND
	ID not in (
		SELECT
			client_id
		from
			courses
	);
	
--RETURNING *