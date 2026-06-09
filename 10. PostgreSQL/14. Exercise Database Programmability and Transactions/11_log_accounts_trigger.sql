CREATE TABLE if not exists logs(
	id int generated always as identity primary key,
	account_id int,
	old_sum numeric,
	new_sum NUMERIC
);

create or replace FUNCTION
	trigger_fn_insert_new_entry_into_logs()
RETURNS trigger as
$$
BEGIN
	Insert INTO
		logs(account_id, old_sum, new_sum)
	VALUES
		(OLD.id, OLD.balance, NEW.balance);

	RETURN NEW;
END
$$
LANGUAGE plpgsql;

create trigger 
	tr_account_balance_change
after UPDATE of balance on accounts
FOR EACH ROW
WHEN
	(NEW.balance <> OLD.balance)
EXECUTE FUNCTION trigger_fn_insert_new_entry_into_logs();

-- UPDATE accounts
-- SET balance = balance + 100;

-- select * from logs;