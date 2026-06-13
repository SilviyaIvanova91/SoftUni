CREATE OR REPLACE FUNCTION log_absence()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.attended = FALSE THEN
    INSERT INTO absences(student_id, session_id)
    VALUES (NEW.student_id, NEW.session_id);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;