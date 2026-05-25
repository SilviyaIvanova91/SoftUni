SELECT
	*
FROM
WHERE
	CASE
		WHEN salary > 3000 THEEN TRUE
		WHEN department = "Training" THEN TRUE
		WHEN gender = 'Female' THEN TRUE
		ELSE FALSE
	END