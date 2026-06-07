CREATE TABLE monasteries (
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY key,
	monastery_name VARCHAR(255),
	country_code CHAR(2)
);

INSERT INTO
	monasteries(monastery_name, country_code)
VALUES
('Rila Monastery "St. Ivan of Rila"', 'BG'),
  ('Bachkovo Monastery "Virgin Mary"', 'BG'),
  ('Troyan Monastery "Holy Mother''s Assumption"', 'BG'),
  ('Kopan Monastery', 'NP'),
  ('Thrangu Tashi Yangtse Monastery', 'NP'),
  ('Shechen Tennyi Dargyeling Monastery', 'NP'),
  ('Benchen Monastery', 'NP'),
  ('Southern Shaolin Monastery', 'CN'),
  ('Dabei Monastery', 'CN'),
  ('Wa Sau Toi', 'CN'),
  ('Lhunshigyia Monastery', 'CN'),
  ('Rakya Monastery', 'CN'),
  ('Monasteries of Meteora', 'GR'),
  ('The Holy Monastery of Stavronikita', 'GR'),
  ('Taung Kalat Monastery', 'MM'),
  ('Pa-Auk Forest Monastery', 'MM'),
  ('Taktsang Palphug Monastery', 'BT'),
  ('Sümela Monastery', 'TR');

ALTER TABLE
 	countries
ADD COLumn
	three_rivers BOOLEAN DEFAULT false;

UPDATE countries
SET three_rivers = (
	select
		count(*) >= 3
	FROM
		countries_rivers AS cr
	WHERE
		cr.country_code = countries.country_code
);

SELECT
	m.monastery_name,
	c.country_name
from
	monasteries as m
JOIN
	countries as c
USING
	(country_code)
WHERE
	not three_rivers
order by
	m.monastery_name;

	
