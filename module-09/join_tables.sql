INSERT INTO
    posts (title, user_id)
VALUES ('New Post 1', 5),
    ('New Post 2', 6),
    ('New Post 3', 7),
    ('New Post 4', 8),
    ('New Post 5', 9);

INSERT INTO users (username) VALUES ('alice'), ('bob'), ('charlie');

SELECT * FROM users;

SELECT * from posts;

-- INNER JOIN
SELECT title, username
FROM posts
    INNER JOIN users ON posts.user_id = users.id;

-- to make simple table name
SELECT p.title, u.username
FROM posts AS p
    INNER JOIN users AS u ON p.user_id = u.id;

-- here we can omit as and directly write like this: posts p
