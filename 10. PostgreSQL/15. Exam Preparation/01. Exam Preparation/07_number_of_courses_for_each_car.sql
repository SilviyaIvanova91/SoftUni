SELECT
	c.id AS car_id,
	c.make,
	c.mileage,
	COUNT(co.id) as count_of_courses,
	ROUND(AVG(co.bill), 2) AS average_bill
from
	cars as c
LEFT JOIN
	courses as co
ON
	c.id = co.car_id
GROUP BY
	c.id
HAVING
	COUNT(co.id) <> 2
ORDER BY 
	count_of_courses DESC,
	c.id ASC;

	