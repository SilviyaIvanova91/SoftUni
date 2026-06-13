SELECT s.name, a.attended, sess.session_date
FROM attendance a
JOIN students s ON a.student_id = s.id
JOIN sessions sess ON a.session_id = sess.id;
