CREATE or REPLACE PROCEDURE sp_transfer_money(
	sender_id INT,
	receiver_id INT,
	amount NUMERIC
)
AS
$$
DECLARE
	current_balance NUMERIC;
BEGIN
	SELECT balance into current_balance from accounts where id = sender_id;

	CALL sp_withdraw_money(sender_id, amount);
	
	IF current_balance >= amount THEN
		CALL sp_deposit_money(receiver_id, amount);
	END IF;
end;
$$
LANGUAGE plpgsql;

CALL sp_deposit_money(1, 200)