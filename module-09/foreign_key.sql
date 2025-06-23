SELECT * FROM students;

-- * example of a foreign key constraint
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES user(id),
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL
);

CREATE table posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES users (id)
);

-- create user data
INSERT INTO users (username) VALUES ('john_doe'), ('jane_smith');

-- create post data
INSERT INTO
    posts (title, user_id)
VALUES ('First Post', 1),
    ('Second Post', 2),
    ('Third Post', 1);

select * from posts;

select * from users;

-- Insertion constraint on INSERT posts;
-- attempting to insert a post with a user ID that does not exist.
-- insert a post with a valid user ID
-- attempting to insert a post without specifying a user ID
