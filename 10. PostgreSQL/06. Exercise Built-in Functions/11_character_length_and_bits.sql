SELECT
	CONCAT(m.mountain_range, ' ', p.peak_name) 
		AS mountain_information,
	LENGTH(CONCAT(m.mountain_range, ' ', p.peak_name)) AS charachters_length,
	BIT_LENGTH(CONCAT(m.mountain_range, ' ', p.peak_name)) AS bits_os_a_string
FROM
	mountains AS m	
JOIN
	peaks AS p
ON
	m.id = p.mountain_id;