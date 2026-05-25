SELECT
	CASE
		WHEN category_id IN (1, 2, 3) THEN 'Starters'
		WHEN category_id = 4 THEN 'Mains'
		ELSE 'Desserts'
	END AS "new product category",
COUNT(id)
FROM products
GROUP BY "new product category";
