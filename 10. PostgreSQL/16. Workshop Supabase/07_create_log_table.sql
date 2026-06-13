CREATE TABLE absences (
  id SERIAL PRIMARY KEY,
  student_id INT,
  session_id INT,
  logged_at TIMESTAMP DEFAULT now()
);