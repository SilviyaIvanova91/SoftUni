CREATE or replace PROCEDURE sp_transfer_money(
	IN sender_id int,
	IN receiver_id int,
	IN transfer_amount int,
	OUT status varchar(50)
)
AS
$$
	DECLARE
		sender_amount int;
		receiver_amount int;
		temp_val int;
	BEGIN
		SELect bgn from bank WHERE id = sender_id INTO sender_amount;
	IF sender_amount < transfer_amount THEN	
		status := 'The sender does not have enought money';
		RETURN;
	END IF;
	SELECT bgn from bank WHERE id = receiver_id INTO receiver_amount;

	UPDATe bank SET bgn = bgn - transfer_amount WHERE id = sender_id;

	UPDATe bank set bgn = bgn + transfer_amount WHERE id = receiver_id;

	SELECT bgn from bank where id = sender_id into temp_val;
	if sender_amount - transfer_amount <> temp_val THEN
		status := 'Error when transfer from sender';
		ROLLBACK;
		RETURN;
	END IF;

	SELECT bgn from bank where id = receiver_id into temp_val;
	IF receiver_amount + transfer_amount <> temp_val THEN
		status := 'Error when trasfer to reciever';
		ROLLBACK;
		RETURN;
	END IF;

	status := 'Success';
	COMMIT;
	END;
$$

LANGUAGE plpgsql;

CALL sp_transfer_money(1, 2, 50, '');

SELECT * FROM bank


-- CREATE TABLE bank (
-- id int PRIMARY KEY,
-- name varchar(20),
-- bgn int
-- );

-- INSERT Into bank(id, name, bgn)
-- VALUES
-- 	(1, 'Ivan', 1000),
-- 	(2, 'Penka', 2000);
