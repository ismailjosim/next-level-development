-- Date and data functions

-- Getting the current date
SELECT CURRENT_DATE;

SELECT now();

-- Extracting Parts of a Date
SELECT EXTRACT( YEAR FROM CURRENT_DATE );
-- 2025
SELECT EXTRACT( MONTH FROM NOW() );
-- 6
SELECT EXTRACT( DAY FROM NOW() );
-- 21
SELECT EXTRACT( DOW FROM CURRENT_DATE );
-- Day of week (0=Sunday)

SELECT TO_CHAR(NOW(), 'YYYY-MM-DD');
-- 2025-06-21
SELECT TO_CHAR(NOW(), 'Month DD, YYYY');
-- June      21, 2025
SELECT TO_CHAR(NOW(), 'HH12:MI AM');
-- 02:45 PM

SELECT CURRENT_DATE + INTERVAL '7 days';
-- Add 7 days
SELECT CURRENT_DATE - INTERVAL '1 month';
-- Subtract 1 month

SELECT AGE ('2025-12-31', '2024-12-31');
-- 1 year
SELECT '2025-06-21'::DATE - '2025-06-01'::DATE;
-- 20 (days)

-- show timezone
SHOW timezone;

-- timestamp with time zone
SELECT NOW() AT TIME ZONE 'UTC';

-- without time zone
SELECT NOW() AT TIME ZONE 'America/New_York';

SELECT to_char(now(), 'DDD');

SELECT *, age (CURRENT_DATE, dob) from students;
