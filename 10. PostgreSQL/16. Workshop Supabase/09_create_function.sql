create or replace function get_absence_student_by_id(
  student_id int
) returns table(
  name TEXT
)
language plpgsql
as
$$
BEGIN
  RETURN query
  select distinct
    s.name
  from
    attendance as a
  join students as s
  ON s.id = a.student_id
  WHERE a.student_id = get_absence_student_by_id.student_id;
END;
$$;

SELECT get_absence_student_by_id(3);