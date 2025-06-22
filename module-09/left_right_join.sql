SELECT * FROM users;

SELECT * FROM posts;

-- LEFT JOIN
SELECT * FROM posts as p LEFT JOIN users as u on p.user_id = u.id;

-- RIGHT JOIN
SELECT * FROM posts as p RIGHT JOIN users as u on p.user_id = u.id;
