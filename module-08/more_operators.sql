-- IN operator
-- SELECT * FROM employees WHERE department_id IN (10, 20, 30);
SELECT * FROM students

SELECT * FROM students WHERE country IN ('Bangladesh', 'Nepal');

-- NOT IN operator
SELECT * FROM students WHERE country NOT IN ('Bangladesh', 'Nepal');

-- BETWEEN operator
SELECT * FROM students WHERE age BETWEEN 18 AND 20;

-- NOT BETWEEN operator
SELECT * FROM students WHERE age NOT BETWEEN 18 AND 20;

-- LIKE operator
SELECT * FROM students WHERE first_name LIKE 'A%';

-- NOT LIKE operator
SELECT * FROM students WHERE first_name NOT LIKE 'A%';

-- ILIKE operator (case-insensitive)
SELECT * FROM students WHERE first_name ILIKE 'a%';
