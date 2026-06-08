CREATE or replace FUNCTION log_items()
RETURNS trigger
as
$$
	BEGIN
		insert into items_log(id, status, created)
		VALUES(new.id, new.status, new.created);
		RETURN new;
	END;
$$
LANGUAGE plpgsql;

CREATE trigger log_items_trigger
after insert on items
for each row execute procedure log_items();


insert into items (id, status)
VALUES
	(1, floor(random() * 100)),
	(2, floor(random() * 100)),
	(3, floor(random() * 100)),
	(4, floor(random() * 100)),
	(5, floor(random() * 100)),
	(6, floor(random() * 100)),
	(7, floor(random() * 100)),
	(8, floor(random() * 100)),
	(9, floor(random() * 100)),
	(10, floor(random() * 100))

	
select * from items;



-- create table items(
-- 	id serial primary key,
-- 	status int,
-- 	created date default now()
-- );

-- create table items_log(
-- 	id serial primary key,
-- 	status int,
-- 	created date default now()
-- );