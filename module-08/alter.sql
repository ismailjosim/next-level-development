-- Active: 1749482585305@@127.0.0.1@5432@ph
-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     email VARCHAR(100) UNIQUE NOT NULL,
--     age INT CHECK (age >= 0)
-- )

-- INSERT INTO users (id, name, email,age) VALUES (2, 'ismail', 'ismailjosim99@gmail.com', 27);

-- alter table users
-- ALTER TABLE users
-- ADD COLUMN address VARCHAR(255) DEFAULT 'Unknown Address' NOT NULL;

-- INSERT into users (id, name, email, age) VALUES(4, 'josim1', 'md2jasim@gmail.com',32);

-- ALTER TABLE users
--     DROP COLUMN address;

-- change column name
-- ALTER TABLE users
--     RENAME COLUMN name to user_name;

-- change column data type
ALTER TABLE users
    ALTER COLUMN user_name TYPE VARCHAR(50);;


-- add constraint to an existing column
ALTER TABLE users
    ALTER COLUMN age set NOT NULL; -- we can also set DEFAULT

-- drop constraint from an existing column
ALTER TABLE users
    ALTER COLUMN age DROP NOT NULL;
