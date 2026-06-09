CREATE or REPLACE PROCEDURE sp_withdraw_money(
	account_id INT,
	money_amount NUMERIC(10, 4)
)
AS
$$
DECLARE
	current_balance NUMERIC;
BEGIN
	current_balance := (SELECT balance FROM accounts WHERE id = account_id);
--	SELECT INTO current_balance FROM accounts WHERE id = account_id;

	IF current_balance >= money_amount THEN
		update accounts
		set balance = balance - money_amount
		where id = account_id;
	else 
		raise notice 'Insufficient balance to withdraw %', money_amount;
	END IF;
end;
$$
LANGUAGE plpgsql;

CALL sp_deposit_money(1, 200)