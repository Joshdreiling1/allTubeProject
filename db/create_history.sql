insert into history
(userId, searches)
values
($1, $2)
RETURNING *;