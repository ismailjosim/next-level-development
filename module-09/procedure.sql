SELECT * FROM employees;
-- Procedure example
CREATE OR REPLACE PROCEDURE remove_emp(p_emp_id INT)
LANGUAGE plpgsql
AS $$
DECLARE
    emp_id INT;
BEGIN
 SELECT employee_id INTO emp_id FROM employees WHERE employee_id = p_emp_id;
    IF emp_id IS NOT NULL THEN
        DELETE FROM employees WHERE employee_id = emp_id;
        RAISE NOTICE 'Employee with ID % has been removed.', emp_id;
    ELSE
        RAISE NOTICE 'No employee found with ID %.', emp_id;
    END IF;


END;
$$;

CALL remove_emp (62);
