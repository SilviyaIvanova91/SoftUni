INSERT INTO students (name) VALUES
('Alice'),
('Bob'),
('Charlie');

INSERT INTO sessions (session_date) VALUES
('2025-07-20'),
('2025-07-21');

INSERT INTO attendance (student_id, session_id, attended) VALUES
(1, 1, TRUE),
(2, 1, FALSE),
(3, 1, TRUE),
(1, 2, TRUE),
(2, 2, TRUE);
