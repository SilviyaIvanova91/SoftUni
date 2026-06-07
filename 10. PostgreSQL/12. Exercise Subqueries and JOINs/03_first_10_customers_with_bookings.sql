SELECT
	b.booking_id,
	TO_CHAR(b.starts_at, 'YYYY-MM-DD') as starts_at,
	b.apartment_id,
	CONCAT(c.first_name, ' ', c.last_name) as customer_name
FROM
	bookings as b
RIGHT JOIN
	customers as c
USING
	(customer_id)
ORDER BY
	customer_name ASC
LIMIT 10;
