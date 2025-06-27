CREATE Function emp_count()
RETURNS INTEGER
LANGUAGE SQL
AS
$$
SELECT COUNT(*) FROM employees;
$$;

SELECT emp_count ();

CREATE Function delete_emp(emp_id INTEGER)
RETURNS VOID
LANGUAGE SQL
as
$$
DELETE FROM employees WHERE employee_id = emp_id;
$$;

-- * ❌ it will not remove all data from the table because Inside an SQL-language function, parameter names are not recognized directly in the SQL statement unless it's a PL/pgSQL function. to fix this:

-- * ✅ use the parameter name in the SQL statement with a different name or use PL/pgSQL function.
DROP FUNCTION IF EXISTS delete_emp (emp_id INTEGER);

CREATE OR REPLACE FUNCTION delete_emp(emp_id INTEGER)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM employees WHERE employee_id = emp_id;
END;
$$;

SELECT * FROM employees;

SELECT delete_emp (61);

-- * Function to Get Total Employees in a Department
CREATE OR REPLACE FUNCTION count_employees(dept_id INTEGER)
RETURNS INTEGER AS $$
DECLARE
  total INTEGER;
BEGIN
  SELECT COUNT(*) INTO total
  FROM employees
  WHERE department_id = dept_id;

  RETURN total;
END;
$$ LANGUAGE plpgsql;

SELECT count_employees (2);

SELECT * FROM employees LIMIT 1;
