-- pagination with LIMIT and OFFSET
-- SELECT *
-- FROM table_name
-- ORDER BY some_column
-- LIMIT page_size
-- OFFSET
--     skip_count;
-- Example: Pagination with LIMIT and OFFSET
SELECT * from students ORDER BY student_id LIMIT 10 OFFSET 5;
-- Always use ORDER BY for predictable pagination. Without it, results can be random.

-- Data Deletion

-- Delete specific rows
DELETE FROM students WHERE student_id = 1;

SELECT * FROM students;

-- Delete all rows in a table
DELETE FROM students;

-- truncate table
TRUNCATE TABLE students;
