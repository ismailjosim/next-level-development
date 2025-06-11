-- Active: 1749482585305@@127.0.0.1@5432@ph
-- * create table
-- CREATE TABLE students (
--     student_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     age INT,
--     grade VARCHAR(2),
--     course VARCHAR(50),
--     email VARCHAR(100),
--     dob DATE,
--     blood_group VARCHAR(5),
--     country VARCHAR(50)
-- );

INSERT INTO
    students (
        first_name,
        last_name,
        age,
        grade,
        course,
        email,
        dob,
        blood_group,
        country
    )
VALUES (
        'Aarav',
        'Khan',
        18,
        'A',
        'Mathematics',
        'aarav.khan@example.com',
        '2007-04-15',
        'A+',
        'Bangladesh'
    ),
    (
        'Fatima',
        'Rahman',
        20,
        'B',
        'Physics',
        'fatima.rahman@example.com',
        '2005-09-12',
        'O-',
        'Bangladesh'
    ),
    (
        'Hasan',
        'Ali',
        19,
        'A',
        'Chemistry',
        'hasan.ali@example.com',
        '2006-01-23',
        'B+',
        'India'
    ),
    (
        'Meher',
        'Begum',
        18,
        'C',
        'Biology',
        'meher.begum@example.com',
        '2007-03-10',
        'AB+',
        'Pakistan'
    ),
    (
        'Tariq',
        'Hossain',
        21,
        'B',
        'English',
        'tariq.hossain@example.com',
        '2004-06-27',
        'A-',
        'Bangladesh'
    ),
    (
        'Nadia',
        'Khatun',
        22,
        'A',
        'Economics',
        'nadia.khatun@example.com',
        '2003-11-05',
        'B-',
        'Nepal'
    ),
    (
        'Imran',
        'Siddique',
        20,
        'C',
        'Computer Science',
        'imran.siddique@example.com',
        '2005-08-20',
        'O+',
        'India'
    ),
    (
        'Salma',
        'Akter',
        18,
        'B',
        'Mathematics',
        'salma.akter@example.com',
        '2007-05-18',
        'AB-',
        'Bangladesh'
    ),
    (
        'Rafi',
        'Chowdhury',
        19,
        'A',
        'Physics',
        'rafi.chowdhury@example.com',
        '2006-02-14',
        'A+',
        'Bangladesh'
    ),
    (
        'Maya',
        'Sen',
        21,
        'A',
        'Biology',
        'maya.sen@example.com',
        '2004-12-01',
        'O+',
        'India'
    ),
    (
        'Zahid',
        'Iqbal',
        20,
        'B',
        'Chemistry',
        'zahid.iqbal@example.com',
        '2005-07-30',
        'B+',
        'Bangladesh'
    ),
    (
        'Rina',
        'Paul',
        19,
        'A',
        'Computer Science',
        'rina.paul@example.com',
        '2006-03-22',
        'O-',
        'India'
    ),
    (
        'Asif',
        'Kamal',
        22,
        'C',
        'English',
        'asif.kamal@example.com',
        '2003-10-10',
        'A-',
        'Pakistan'
    ),
    (
        'Farah',
        'Naz',
        20,
        'B',
        'Economics',
        'farah.naz@example.com',
        '2005-06-08',
        'AB+',
        'Bangladesh'
    ),
    (
        'Adnan',
        'Shah',
        18,
        'A',
        'Mathematics',
        'adnan.shah@example.com',
        '2007-01-01',
        'B+',
        'India'
    ),
    (
        'Lamia',
        'Haque',
        21,
        'B',
        'Physics',
        'lamia.haque@example.com',
        '2004-05-25',
        'O+',
        'Bangladesh'
    ),
    (
        'Rehan',
        'Karim',
        19,
        'C',
        'Biology',
        'rehan.karim@example.com',
        '2006-09-19',
        'A+',
        'Pakistan'
    ),
    (
        'Maliha',
        'Jahan',
        20,
        'A',
        'Chemistry',
        'maliha.jahan@example.com',
        '2005-02-11',
        'B-',
        'Bangladesh'
    ),
    (
        'Tanvir',
        'Ahmed',
        22,
        'B',
        'Computer Science',
        'tanvir.ahmed@example.com',
        '2003-07-04',
        'O-',
        'Nepal'
    ),
    (
        'Sadia',
        'Nahar',
        18,
        'A',
        'English',
        'sadia.nahar@example.com',
        '2007-11-29',
        'AB-',
        'Bangladesh'
    );

-- see everything table data
SELECT * FROM students;

-- see specific column data
SELECT first_name, email, course FROM students;

-- see field name with different name
SELECT
    first_name AS "First Name",
    last_name AS "Last Name",
    email AS "Email Address"
FROM students;

-- * sort by
SELECT * FROM students ORDER BY age ASC;

SELECT * FROM students ORDER BY grade ASC;

-- get unique values
SELECT DISTINCT country FROM students;

SELECT DISTINCT blood_group FROM students;

-- * filter data
SELECT * FROM students WHERE age > 20;

SELECT * FROM students WHERE grade = 'A';

SELECT * FROM students WHERE blood_group = 'A+';

SELECT * FROM students WHERE country = 'Bangladesh';

-- * filter with multiple conditions
SELECT * FROM students WHERE course = 'Physics' AND grade = 'B';

SELECT * FROM students WHERE age < 20 OR grade = 'A';

SELECT *
FROM students
WHERE
    country = 'Bangladesh'
    AND (
        grade = 'A'
        OR grade = 'B'
    );

-- * comparison operators
SELECT * FROM students WHERE age >= 18;

SELECT * FROM students WHERE age <= 22;

SELECT * FROM students WHERE age <> 20;
-- not equal to
SELECT * FROM students WHERE first_name LIKE 'A%';
-- starts with 'A'
