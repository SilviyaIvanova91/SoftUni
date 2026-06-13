ALTER table absences
add constraint absences_student_fk foreign key (student_id)  references students(id),
add constraint absences_session_fk foreign key (session_id) references sessions(id);