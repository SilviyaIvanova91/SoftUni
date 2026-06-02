CREATE TABLE orders (
id INT PRIMARY KEY,
client_id INT,
CONSTRAINT fk_client
FOREIGN KEY(client_id)
REFERENCES clients(id)
);