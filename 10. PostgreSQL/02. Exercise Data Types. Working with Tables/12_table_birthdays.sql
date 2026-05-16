CREATE TABLE minions_birthdays (
id int GENERATED ALWAYS AS identity PRIMARY key,
name VARCHAR(50),
date_of_birth DATE,
age INT,
present VARCHAR(100),
party TIMESTAMPTZ
);

