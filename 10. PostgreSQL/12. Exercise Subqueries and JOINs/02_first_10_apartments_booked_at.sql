SELECT
	a.name,
	a.country,
	TO_CHAR(b.booked_at, 'YYYY-MM-DD') as booked_at
FROM
	apartments as a
LEFT JOIN
	bookings as b
USING
	(apartment_id)
LIMIT 10;
