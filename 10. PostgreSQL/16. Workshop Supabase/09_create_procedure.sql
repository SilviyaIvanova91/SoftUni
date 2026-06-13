create or replace procedure mark_studnt_absent(
    p_student_id INT,
    p_session_id INT
)
LANGUAGE plpgsql
as $$
BEGIN 
  IF NOT EXISTS (SELECT 1 FROM students WHERE id = p_student_id) then
    RAISE EXCEPTION 'Student with id % does not exist.', p_student_id;
  END IF;

   IF NOT EXISTS (SELECT 1 FROM sessions WHERE id = p_session_id) then
    RAISE EXCEPTION 'Session with id % does not exist.', p_session_id;
  END IF;

  INSERT INTO attendance(student_id, session_id, attended)
  VALUES (p_student_id, p_session_id, FALSE)
  ON CONFLICT (student_id, session_id)
  DO UPDATE SET attended = FALSE;

  RAISE NOTICE 'Student % marked absent for session %', p_student_id, p_session_id;
END;
$$;

CALL mark_studnt_absent(2, 2);