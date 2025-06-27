SELECT * FROM employees;

-- view all of the IT department employees
CREATE VIEW al_it_employees AS
SELECT
    employee_id,
    employee_name,
    salary,
    hire_date
FROM employees
WHERE
    department_name = 'IT';

SELECT * FROM al_it_employees;

-- ✅ 2. View of Employees Hired After 2020
CREATE VIEW al_employees_hired_after_2020 AS
SELECT
    employee_id,
    employee_name,
    department_name,
    salary,
    hire_date
FROM employees
WHERE
    hire_date > '2020-01-01';

SELECT * FROM al_employees_hired_after_2020;

-- ✅ 3. View of HR Employees with Salary Less Than 70,000
CREATE VIEW hr_low_salary AS
SELECT
    employee_id,
    employee_name,
    salary
FROM employees
WHERE
    department_name = 'HR'
    AND salary < 70000;

SELECT * FROM hr_low_salary;

-- ✅ 4. View Showing Average Salary by Department
CREATE VIEW avg_salary_by_dept AS
SELECT department_name, AVG(salary) AS avg_salary
FROM employees
GROUP BY
    department_name;

SELECT * FROM avg_salary_by_dept;

-- ✅ 5. View of Top Earners (Salary > 90,000)
CREATE VIEW top_earners AS
SELECT
    employee_name,
    department_name,
    salary
FROM employees
WHERE
    salary > 90000;

SELECT * FROM top_earners;

-- ✅ 6. View of Employees with Colored Last Names
-- This assumes you're interested in names like “Blue”, “Green”, “Red”, etc.
CREATE VIEW color_named_employees AS
SELECT *
FROM employees
WHERE
    employee_name ~* 'Blue|Green|Red|Yellow|Purple|Orange|White';

SELECT * FROM color_named_employees;
