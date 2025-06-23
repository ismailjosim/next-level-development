SELECT * FROM users;

SELECT * FROM posts;

-- Full OUTER JOIN
SELECT *
FROM posts as p
    FULL OUTER JOIN users as u on p.user_id = u.id;

-- CROSS JOIN: Cartesian product of both tables
SELECT * FROM posts as p CROSS JOIN users as u;

-- [ A ] × [ B ] → A1B1, A1B2, A2B1, A2B2, ...

-- NATURAL JOIN: Automatically joins on columns with the same name
SELECT * FROM posts NATURAL JOIN users;
