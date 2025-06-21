-- update first_name
SELECT * from students;

SELECT * from students ORDER BY grade ASC;

-- update first_name to fName;
UPDATE students SET first_name = 'fName';

-- update grade with condition
UPDATE students SET grade = 'A+' WHERE age > 20;

-- update course with condition
UPDATE students
SET
    course = 'CSE'
WHERE
    course = 'Computer Science';
