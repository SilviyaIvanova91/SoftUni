CREATE TABLE capitals(
capital_id SERIAL PRIMARY KEY,
capital_name VARCHAR(50)
);

CREATE TABLE countries(
country_id SERIAL PRIMARY KEY,
capital_id INT UNIQUE,
CONSTRAINT fk_countries_capitals FOREIGN KEY
(capital_id) REFERENCES capitals(capital_id)
);