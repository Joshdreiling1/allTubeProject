insert into history
(id, searches)
values
($1, $2)
RETURNING *;