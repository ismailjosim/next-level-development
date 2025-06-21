-- NUll with conditions
SELECT * FROM students WHERE NOT (age > 20);

SELECT * FROM students

-- show default value if specified field is NULL
SELECT first_name, last_name, COALESCE(age, 18) as age FROM students;

SELECT first_name, COALESCE(first_name, 'No nickname') FROM students;
