CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE sessions (
  id SERIAL PRIMARY KEY,
  session_date DATE NOT NULL
);

CREATE TABLE attendance (
  student_id INT REFERENCES students(id),
  session_id INT REFERENCES sessions(id),
  attended BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (student_id, session_id)
);
