SELECT * FROM employees;

-- * create indexing
CREATE INDEX idx_employee_name ON employees (employee_name);

SELECT * FROM employees WHERE employee_name = 'Bob Johnson';

-- composite index (multi-column)
CREATE INDEX idx_dept_salary on employees (department_id, salary);

SELECT * FROM employees WHERE department_id = 3 AND salary > 50000;

-- indexing on hire_date for sorting
CREATE INDEX idx_hire_date on employees (hire_date);

SELECT * FROM employees ORDER BY hire_date DESC;

-- check all indexes
SELECT * FROM pg_indexes WHERE tablename = 'employees';

-- * drop index
DROP INDEX if EXISTS idx_dept_salary;

-- partial index: only index rows matching a condition reduces size and speeds up targeted queries.
CREATE INDEX idx_active_hr ON employees (department_id)
WHERE
    department_id = 3;

-- to see index is used:
EXPLAIN ANALYSE SELECT * FROM employees WHERE employee_id = 3;

-- show data directory
SHOW data_directory;
