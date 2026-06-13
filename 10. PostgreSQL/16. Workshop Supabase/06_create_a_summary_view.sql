CREATE VIEW student_attendance_summary AS
SELECT s.id, s.name, COUNT(a.attended) FILTER (WHERE a.attended) AS attended_count
FROM students s
LEFT JOIN attendance a ON s.id = a.student_id
GROUP BY s.id, s.name;
