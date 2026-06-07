SELECT
	a.country,
	COUNT(booking_id) as booking_count
FROM
	apartments as a
JOIN
	bookings as b
USING
	(apartment_id)
WHERE
	b.booked_at > '2021-05-18 07:52:09.904+03' 
	and 
	b.booked_at < '2021-09-17 19:48:02.147+03'
GROUP BY
	a.country
ORDER BY
	booking_count DESC,
	a.country ASC;

