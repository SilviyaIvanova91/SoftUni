ALTER TABLE minions_info

add constraint unique_containt
UNIQUE (id, email),

add constraint banana_check
CHECK (banana > 0);

