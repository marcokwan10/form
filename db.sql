CREATE DATABASE canoe;

CREATE TABLE form(
  form_id SERIAL PRIMARY KEY,
  course_a VARCHAR(32),
  course_b VARCHAR(32),
  course_c VARCHAR(32)
);
