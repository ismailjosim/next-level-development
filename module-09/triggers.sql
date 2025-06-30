--* A trigger is a database object in PostgresSQL (and other dbms) that is automatically executes a specified set of actions in response to certain db events or conditions.

-- * Table-Level Events:
-- Insert, update, delete, truncate
-- DB-Level Events:
-- DB startup, DB shutdown, DB connection, DB disconnection

-- crate trigger name
-- {BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}

CREATE Table instructors (
    username VARCHAR(50),
    email VARCHAR(100)
)

INSERT INTO
    instructors
VALUES (
        'ismail',
        'ismailjosim99@gmail.com'
    ),
    (
        'josim',
        'mdjasim.ph@gmail.com'
    )

SELECT * FROM instructors;

SELECT * FROM deleted_instructor_audit;

CREATE Table deleted_instructor_audit (
    deleted_user_name VARCHAR(50),
    deletedAt TIMESTAMP
)

CREATE OR REPLACE Function save_deleted_user ()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
BEGIN
INSERT INTO deleted_instructor_audit VALUES(OLD.username,now());
RAISE NOTICE 'User Audit Log Created';
RETURN OLD;

END
$$

CREATE OR REPLACE Trigger save_deleted_user_trigger
BEFORE DELETE
on instructors
FOR EACH ROW
EXECUTE FUNCTION save_deleted_user ();

DELETE FROM instructors WHERE username = 'josim';
