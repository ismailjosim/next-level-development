SELECT upper('hello');

SELECT round(3.14159, 2);

SELECT upper(first_name) as full_name, * from students;

-- date/time functions
SELECT now();

-- concat function
SELECT concat(first_name, ' ', last_name) as FullName FROM students;

-- string functions
SELECT length(first_name) FROM students;

-- aggregate functions: return a single value from a set of values
SELECT count(*) FROM students;

-- avg age with limit 2 digits
SELECT round(avg(age), 2) FROM students;

-- max age
SELECT max(age) FROM students;

-- min age
SELECT min(age) FROM students;
