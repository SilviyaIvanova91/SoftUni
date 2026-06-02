ALTER TABLE persons
ADD CONSTRAINT fk_persons_town
FOREIGN KEY (town)
REFERENCES towns(id)