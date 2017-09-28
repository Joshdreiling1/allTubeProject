insert into users
(email, password, auth_id)
values
($1, $2, $3)
RETURNING *;