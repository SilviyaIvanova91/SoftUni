create or REPLACE FUNCTION fn_is_word_comprised(
	set_of_letters varchar(50),
	word varchar(50)
) RETURNS BOOLEAN 
AS
$$
DECLARE
	i INT;
	letter CHAR(1);
BEGIN
--	RETURN TRIM(LOWER(word), LOWER(set_of_letters)) = '';
	FOR i IN 1..LENGTH(word) LOOP	-- HELLO -> H E L L O
										--		1 2 3 4 5
		letter := SUBSTRING(LOWER(word), i, 1);	-- word[i].lower()
		IF POSITION(letter IN LOWER(set_of_letters)) = 0 THEN
			RETURN FALSE;
		END IF;
	END LOOP;

	RETURN TRUE;
END;
$$
Language plpgsql;

SELECT fn_is_word_comprised('ois tmiah%f', 'halves')