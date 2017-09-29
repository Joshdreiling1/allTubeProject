-- CREATE TABLE tests 
-- ( 
--   subject_id SERIAL,
--   subject_name text,
--   highestStudent_id integer
-- );

-- alter table tests 
--     add constraint fk_tests_students
--     foreign key (highestStudent) 
--     REFERENCES students (id);


    CREATE TABLE tests 
( 
  subject_id SERIAL,
  subject_name text,
  highestStudent_id integer, 
  constraint fk_tests_students
     foreign key (highestStudent) 
     REFERENCES students (id)
);