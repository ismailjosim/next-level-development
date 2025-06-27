CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50),
    salary DECIMAL(10, 2) NOT NULL,
    hire_date DATE
);

-- Inserting sample data into the employees table
INSERT INTO
    employees (
        employee_name,
        department_name,
        salary,
        hire_date
    )
VALUES (
        'Alice Smith',
        'HR',
        60000.00,
        '2020-01-15'
    ),
    (
        'Bob Johnson',
        'IT',
        75000.00,
        '2019-03-22'
    ),
    (
        'Charlie Brown',
        'Finance',
        80000.00,
        '2021-06-30'
    ),
    (
        'Diana Prince',
        'IT',
        72000.00,
        '2018-11-05'
    ),
    (
        'Ethan Hunt',
        'HR',
        65000.00,
        '2022-02-10'
    ),
    (
        'Fiona Green',
        'Finance',
        90000.00,
        '2020-07-20'
    ),
    (
        'George White',
        'IT',
        70000.00,
        '2019-09-15'
    ),
    (
        'Hannah Blue',
        'HR',
        62000.00,
        '2021-04-25'
    ),
    (
        'Ian Black',
        'Finance',
        85000.00,
        '2022-03-01'
    ),
    (
        'Jane Doe',
        'IT',
        78000.00,
        '2020-12-10'
    ),
    (
        'Kevin Brown',
        'HR',
        64000.00,
        '2019-08-30'
    ),
    (
        'Laura Green',
        'Finance',
        92000.00,
        '2021-05-15'
    ),
    (
        'Mike White',
        'IT',
        71000.00,
        '2020-10-05'
    ),
    (
        'Nina Blue',
        'HR',
        63000.00,
        '2022-01-20'
    ),
    (
        'Oscar Red',
        'Finance',
        88000.00,
        '2019-02-28'
    ),
    (
        'Paula Yellow',
        'IT',
        77000.00,
        '2021-08-10'
    ),
    (
        'Quinn Purple',
        'HR',
        66000.00,
        '2020-03-15'
    ),
    (
        'Rita Orange',
        'Finance',
        94000.00,
        '2019-11-20'
    ),
    (
        'Sam Green',
        'IT',
        73000.00,
        '2022-04-05'
    ),
    (
        'Tina Blue',
        'HR',
        65000.00,
        '2021-07-30'
    ),
    (
        'Ursula White',
        'Finance',
        90000.00,
        '2020-05-10'
    ),
    (
        'Victor Black',
        'IT',
        72000.00,
        '2019-12-15'
    ),
    (
        'Wendy Brown',
        'HR',
        64000.00,
        '2022-06-01'
    ),
    (
        'Xander Green',
        'Finance',
        85000.00,
        '2021-09-20'
    ),
    (
        'Yara Blue',
        'IT',
        78000.00,
        '2020-08-05'
    ),
    (
        'Zane Red',
        'HR',
        67000.00,
        '2019-04-10'
    );

SELECT * FROM employees;

-- * Retrieve all the employees whose salary is greater than the heighest salary in the HR Department. 67000

SELECT * FROM employees WHERE salary > 67000;
-- here we didn't know the highest salary in the HR department, so we use a subquery to find it.

SELECT max(salary) FROM employees WHERE department_name = 'HR';

-- now we can retrieve all the employees whose salary is greater than the highest salary in the HR department.
SELECT *
FROM employees
WHERE
    salary > (
        SELECT max(salary)
        FROM employees
        WHERE
            department_name = 'HR'
    );
-- the query that return only one value or one row, one column its called a scalar subquery.

SELECT department_name, sum(salary)
FROM employees
GROUP BY
    department_name;

-- using from clause in a subquery
SELECT *
FROM (
        SELECT department_name, sum(salary)
        FROM employees
        GROUP BY
            department_name
    ) AS sum_dept_salary;

-- using where clause in a subquery
SELECT *
FROM employees -- main query
WHERE
    salary > (
        SELECT max(salary)
        FROM employees
        WHERE
            department_name = 'HR'
    );
