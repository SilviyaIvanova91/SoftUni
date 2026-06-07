SELECT
	b.booking_id,
	a.name as apartment_owner,
	a.apartment_id,
	CONCAT(c.first_name, ' ', c.last_name) as customer_name
FROM
	bookings as b
FULL JOIN
	apartments as a
USING
	(apartment_id)
FULL JOIN 
	customers as c
USING
	(customer_id)
ORDER BY
	booking_id ASC,
	apartment_owner ASC,
	customer_name ASC;
