UPDATE
	projects
SET
	end_date = start_date + INTERVAL '5 months'
	-- end_date = start_date + '5 months'::interval
WHERE
	end_date IS NULL;
	


