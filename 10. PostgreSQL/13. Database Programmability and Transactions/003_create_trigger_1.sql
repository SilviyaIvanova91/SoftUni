CREATE or replace FUNCTION fn_delete_last_items_log()
RETURNS trigger
as
$$
	BEGIN
		while (select count(*) from items_log) >8 Loop
			delete from items_log where id = (select min(id) from items_log);
		end loop;
		return new;
	END;
$$
LANGUAGE plpgsql;

create or replace trigger clear_items_log_trigger
after insert on items_log
for each statement execute procedure fn_delete_last_items_log();


