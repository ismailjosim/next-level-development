SELECT * FROM students;

-- grouping and filtering
SELECT COUNT(*) FROM students;

SELECT country FROM students GROUP BY country;

-- count students by country
SELECT country, COUNT(*) AS student_count
FROM students
GROUP BY
    country;

-- count of students per course
SELECT course, COUNT(*) AS student_in_course
FROM students
GROUP BY
    course;

-- * 3. Filter:Only Courses with More Than 2 Students ( HAVING )
SELECT course, COUNT(*) AS students_in_course
FROM students
GROUP BY
    course
HAVING
    COUNT(*) > 2;

-- * Average Age per Country
SELECT country, AVG(age) AS avg_age FROM students GROUP BY country;

-- * 5. Count of Each Grade in Each Country
SELECT country, grade, COUNT(*) AS grade_count
FROM students
GROUP BY
    country,
    grade;

-- * 6. Courses with Average Age Less Than 20
SELECT course, AVG(age) AS avg_age
FROM students
GROUP BY
    course
HAVING
    AVG(age) < 20;

SELECT first_name, last_name, COUNT(*) AS count
FROM students
GROUP BY
    first_name,
    last_name
HAVING
    COUNT(*) > 1;

SELECT country, count(*), avg(age) FROM students GROUP BY country;

-- * count student born in each year
SELECT EXTRACT(
        year
        from dob
    ) as birth_year, count(*) AS student_count
from students
GROUP BY
    birth_year;
