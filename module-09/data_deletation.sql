SELECT * from posts;

-- Attempting to delete a user with associated posts (default behavior)
DELETE FROM users WHERE id = 1;
-- * This will fail due to the foreign key constraint

-- ON DELETE CASCADE: to do this, we need to alter the foreign key constraint
-- * for creating the posts table
CREATE table posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE
);
-- * if the table already exist, then alter the foreign key constraint
ALTER TABLE posts
DROP CONSTRAINT posts_user_id_fkey,
ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE;

-- Now, if we delete a user, all their posts will also be deleted
DELETE FROM users WHERE id = 2;

-- insert new posts
INSERT INTO
    posts (title, user_id)
VALUES ('New Post 1', 3),
    ('New Post 2', 4),
    ('New Post 2', 4),
    ('New Post 2', 3),
    ('New Post 2', 5),
    ('New Post 2', 6);

SELECT * FROM posts;

SELECT * FROM users;

-- on delete set NULL: to do this, we need to alter the foreign key constraint
ALTER TABLE posts
DROP CONSTRAINT posts_user_id_fkey,
ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL;

-- Now, if we delete a user, their posts will remain but the user_id will be set to NULL
DELETE FROM users WHERE id = 5;

-- ON DELETE SET DEFAULT: to do this, we need to alter the foreign key constraint
-- Step 1: Set default value
ALTER TABLE posts ALTER COLUMN user_id SET DEFAULT 0;

-- Step 2: Drop old constraint and add new with SET DEFAULT
ALTER TABLE posts
DROP CONSTRAINT posts_user_id_fkey,
ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET DEFAULT;
