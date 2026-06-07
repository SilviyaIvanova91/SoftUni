SELECT
	CONCAT(a.address, ' ', a.address_2) as apartment_address,
	b.booked_for as nights
FROM
	apartments as a
JOIN
	bookings as b
ON
	b.apartment_id = a.apartment_id
-- USING
--		(apartment_id)
ORDER BY
	a.apartment_id;