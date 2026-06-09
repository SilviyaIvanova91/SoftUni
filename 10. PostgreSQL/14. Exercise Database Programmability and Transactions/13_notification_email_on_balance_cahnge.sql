create table if not exists notification_emails(
	id int generated always as identity primary key,
	recepient_id int,
	subject varchar,
	body text
);

create or replace FUNCTION 
 	trigger_fn_send_email_on_balance_change()
RETURNS trigger as
$$
BEGIN
	INSERT INTO
	notification_emails(recepient_id, subject, body)
	VALUES(
		NEW.account_id,
		'Balance change for account: ' || NEW.account_id,
		'On ' || DATE(NOW()) || ' your balance was changed from' || NEW.old_sum || ' to ' || NEW.new_sum || '.'
	);

RETURN NEW;
END;
$$
LANGUAGE plpgsql;

create TRIGGER
	tr_send_email_on_balance_change
AFTER UPDATE ON  logs
--AFTER INSERT ON  logs
FOR each row
execute function trigger_fn_send_email_on_balance_change();

-- insert into logs(account_id, old_sum, new_sum)
-- values(1, 100, 200);

-- select * from notification_emails;